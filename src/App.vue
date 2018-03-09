<template>
  <div id="app">
    <div class="editor" ref="editable" contenteditable>...</div>
    <button @click="insertToEditable">Insert</button>
    <hr>
    <input type="text" class="editor" ref="input" value="...">
    <button @click="insertToInput">Insert</button>
    <hr>
    <textarea class="editor" ref="textarea">...</textarea>
    <button @click="insertToTextarea">Insert</button>
  </div>
</template>

<script>
import insertText from '@/insert'

export default {
  name: 'app',
  methods: {
    insertToEditable () {
      this.$refs.editable.focus()
      insertText(Math.random() + ' ')
    },
    insertToInput () {
      this.$refs.input.focus()
      insertText(Math.random() + ' ')
    },
    insertToTextarea () {
      this.$refs.textarea.focus()
      insertText(Math.random() + ' ')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.editor {
  display: inline-block; /* align to center */
  box-sizing: border-box;
  width: 400px;
  max-width: 100%;
  height: 80px;
  overflow: auto;
  white-space: pre-wrap;
  border: solid 1px rgba(0,0,0,.3);
  padding: .4em;
}

button {
  /* emable button style in mobile emulator */
}

hr {
  margin: 30px 0;
}
</style>
