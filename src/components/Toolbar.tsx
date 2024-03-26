'use client';

import { type Editor } from '@tiptap/react';
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading
} from 'lucide-react';
import { Toggle } from '@/components/Toggle';

type Props = {
  editor: Editor | null,
}

export function Toolbar({ editor }: Props) {
  if(!editor) {
    return null;
  }

  return (
    <div className="border-2 border-gray-300 rounded-md p-2 text-left space-x-2">
      <Toggle
        size="sm"
        pressed={editor.isActive('heading')}
        onPressedChange={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <Heading className="h-4 w-4"/>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <Bold className="h-4 w-4"/>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => {
          editor.chain().focus().toggleItalic().run();
        }}
      >
        <Italic className="h-4 w-4"/>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => {
          editor.chain().focus().toggleStrike().run();
        }}
      >
        <Strikethrough className="h-4 w-4"/>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bulletlist')}
        onPressedChange={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
      >
        <List className="h-4 w-4"/>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('orderedlist')}
        onPressedChange={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <ListOrdered className="h-4 w-4"/>
      </Toggle>
    </div>
  )
}