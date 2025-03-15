"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "./editor-toolbar";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    editorProps: {
      attributes: {
        class:
          "min-h-40 bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      // console.log(editor.getText());
      // console.log(editor.getJSON());
      console.log(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-input rounded-md shadow-sm">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} placeholder="Type your description" />
    </div>
  );
}
