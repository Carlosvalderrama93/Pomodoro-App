export default function render(templateString) {
  const dummyDIV = document.createElement("div")

  dummyDIV.innerHTML = templateString
  return dummyDIV.firstChild
}
