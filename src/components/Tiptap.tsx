'use client';

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import { Toolbar } from '@/components/Toolbar';

export default function TipTap() {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div className='space-y-2'>
      <Toolbar editor={editor}/>
      <EditorContent editor={editor} />
    </div>
  )
}
