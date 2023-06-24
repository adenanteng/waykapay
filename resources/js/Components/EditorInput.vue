<script setup>
import {onMounted, ref, watch} from 'vue';
import {Editor, EditorContent, useEditor} from '@tiptap/vue-3'
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"
import 'tippy.js/dist/tippy.css'; // optional for styling
import GroupButton from "@/Components/GroupButton.vue";
import GroupButtonLink from "@/Components/GroupButtonLink.vue";
import StarterKit from "@tiptap/starter-kit";


const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
});

const editor = useEditor({
    editorProps: {
        attributes: {
            class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl p-3 mt-3 focus:outline-none bg-white border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm',
        },
    },
    extensions: [
        StarterKit.configure({
            paragraph: {
                HTMLAttributes: {
                    class: 'text-base text-gray-600',
                },
            },
            Heading: {
                HTMLAttributes: {
                    class: 'text-gray-900',
                },
            },
        })
    ],
    onUpdate: ({editor}) => {
        let content = editor.getHTML()
        emit('update:modelValue', content)
    },
    content: props.modelValue
})

const emit = defineEmits(['update:modelValue']);

watch(() => props.modelValue, (newValue, oldValue) => {
    const isSame = newValue === oldValue
    console.log(`Same: ${isSame}`)
    if (isSame) {
        return
    }
    // editor.command.setContent(newValue, false)
})

</script>

<template>
    <GroupButton>
        <GroupButtonLink @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" class="rounded-l-2xl">H1</GroupButtonLink>
        <GroupButtonLink @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" >H2</GroupButtonLink>
        <GroupButtonLink @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" >H3</GroupButtonLink>
        <GroupButtonLink @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" >H4</GroupButtonLink>
        <GroupButtonLink @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" >H5</GroupButtonLink>
        <GroupButtonLink @click="editor.chain().focus().setParagraph().run()" class="rounded-r-2xl mr-2" >P</GroupButtonLink>

        <GroupButtonLink @click="editor.chain().focus().toggleItalic().run()" class="rounded-l-2xl"><i>Italic</i></GroupButtonLink>
        <GroupButtonLink @click="editor.chain().focus().toggleBold().run()"><b>Bold</b></GroupButtonLink>
        <GroupButtonLink @click="editor.chain().focus().toggleBulletList().run()" class="rounded-r-2xl mr-2">List</GroupButtonLink>

<!--        <GroupButtonLink @click="editor.chain().focus().undo().run()" class="rounded-l-2xl" :disabled="!editor.can().chain().focus().undo().run()">undo</GroupButtonLink>-->
<!--        <GroupButtonLink @click="editor.chain().focus().redo().run()" class="rounded&#45;&#45;2xl" :disabled="!editor.can().chain().focus().redo().run()">redo</GroupButtonLink>-->
    </GroupButton>

    <EditorContent
        ref="input"
        @input="$emit('update:modelValue', $event.target.value)"
        :editor="editor"
        required />
</template>
