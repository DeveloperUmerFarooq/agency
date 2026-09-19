export function updatePointerGlow(event, xProperty, yProperty) {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = ((event.clientX - bounds.left) / bounds.width) * 100
  const y = ((event.clientY - bounds.top) / bounds.height) * 100

  event.currentTarget.style.setProperty(xProperty, `${x}%`)
  event.currentTarget.style.setProperty(yProperty, `${y}%`)
}
