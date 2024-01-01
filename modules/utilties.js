export function createAnElement(tag, parent, CSSclass, theTextContent) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  element.classList.add(CSSclass);
  element.textContent = theTextContent
  return element
}