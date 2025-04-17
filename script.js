function toggleMode() {
  const html = document.documentElement
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // }

  // else {
  //   html.classList.add('light')
  // }
  html.classList.toggle("light") // logica explicada no comentario de cima

  const img = document.querySelector("#profile img")

  // pegar a tag img e substituir a imagem
  if (html.classList.contains("light")) {
    // para light mode, img light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // para dark mode, img dark
    img.setAttribute("src", "./assets/avatar.png")
  }
}
