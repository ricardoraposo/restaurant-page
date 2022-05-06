function makeBody() {
  const body = document.createElement("div");
	body.classList.add("main-content")
	body.classList.add("home")
	body.setAttribute("id", "home")

	const image = document.createElement("div")
	image.classList.add("image-pic")
	const p0 = document.createElement("p")
	const p1 = document.createElement("p")
	p0.textContent = "🥘 Cozinha Variada 🍺 Cerveja Artesanal" 
	p1.textContent += "🕑 Aberto De 11 à 01:00-Dom e 2a-ate 18h"


	body.appendChild(image)
	body.appendChild(p0)
	body.appendChild(p1)
	return body
}

export default makeBody()
