/* global Node, getSelection */

export default function insert (text) {
  let ae = document.activeElement
  if (ae.tagName === 'TEXTAREA') {
    return insertToTextarea(text, ae)
  } else {
    return insertToEditable(text)
  }
}

function insertToEditable (text) {
  let r = getRange()
  let node = r.endContainer
  r.deleteContents()

  if (node.nodeType === Node.TEXT_NODE) {
    let cut = r.endOffset
    node.data = node.data.slice(0, cut) +
      text + node.data.slice(cut)
    r.setEnd(node, cut + text.length)
  } else {
    let t = document.createTextNode(text)
    r.insertNode(t)
    r.setEndAfter(t)
  }
  r.collapse(false) // arg is required in IE
}

function insertToTextarea (text, ta) {
  let start = ta.selectionStart
  let end = ta.selectionEnd

  ta.value = ta.value.slice(0, start) +
    text + ta.value.slice(end)
  let newEnd = start + text.length

  ta.selectionStart = newEnd
  ta.selectionEnd = newEnd
}

function getRange () {
  let selection = getSelection()
  if (selection && selection.rangeCount > 0) {
    return selection.getRangeAt(0)
  }
}
