import { db } from "@/server/db";
import argon2 from 'argon2';
import jsonwebtoken from 'jsonwebtoken';

const secret = process.env.SECRET;

export async function register(username: string, password: string) {
  try {
    const hashedPassword = await argon2.hash(password);

    const user = await db.user.create({ data: {
      name: username,
      password: hashedPassword,
    } });
  } catch(err) {
    console.log(err);
    return { code: 500, message: 'something went wrong.' };
  }
}

export async function login(username: string, password: string) {
  try {
    const user = await db.user.findUnique({ where: { name: username } });

    if (!user) {
      return { code: 404, message: 'user not found' };
    }

    const passwordMatch = await argon2.verify(user.password, password);

    if (!passwordMatch) {
      return { code: 401, message: 'invalid credentials' };
    }

    if(user.banned) {
      return { code: 403, message: 'you are banned from vibe.' };
    }

    const token = jsonwebtoken.sign({ id: user.id, banned: user.banned }, secret!, { expiresIn: '7d' });

    return { code: 200, message: 'login successful', token };
  } catch(err) {
    console.log(err);
    return { code: 500, message: 'something went wrong.' };
  }
}

export function whoami(token: string) {
  try {
    const decodedToken = jsonwebtoken.verify(token, secret!) as { id: string, banned: string };
    if(decodedToken.banned) {
      return { code: 200, message: 'you are banned' };
    } else {
      return { code: 200, userId: decodedToken.id };
    }
  } catch (err) {
    console.log(err);
    return { code: 401, message: 'unauthorized' };
  }
}