import { type Editor } from "@tiptap/react";
import { Toggle } from "@waredrop/ui";
import { LuBold, LuItalic, LuHeading, LuList } from "react-icons/lu";

export default function EditorToolbar({ editor }: { editor: Editor }) {
  return (
    <div className="flex gap-2 items-center px-3 py-1 rounded-md border-b">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 1 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <LuHeading size={16} />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <LuBold size={16} />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <LuItalic size={16} />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <LuList size={16} />
      </Toggle>
    </div>
  );
}
