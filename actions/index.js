export function xml_changed(text) {
  return { type: 'XML_CHANGED', xml: text };
}

export function encoded_changed(text) {
  return { type: 'ENCODED_CHANGE', encoded: text };
}