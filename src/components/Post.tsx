import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

export default function Post(props) {
  dayjs.extend(relativeTime);

  return (
    <div className={props.className}>
      <div className="border-2 border-gray-300 rounded-md p-8 text-left space-y-4">
        <Link href={`/u/${props.post.author}`} className="font-bold text-xl">{props.post.author}</Link>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: props.post.content }}></div>
        <p className="italic text-gray-400">{dayjs(props.post.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}