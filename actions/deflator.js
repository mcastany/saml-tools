export function inflated_changed(text) {
  return { type: 'INFLATED_CHANGED', inflated: text };
}

export function deflated_changed(text) {
  return { type: 'DEFLATED_CHANGED', deflated: text };
}