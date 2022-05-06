function makeContact(){
	const contactBody = document.createElement("div")
	contactBody.classList.add("main-content")
	contactBody.classList.add("contact")
	contactBody.classList.add("hidden")
	contactBody.setAttribute("id", "contact")

	const times = document.createElement("p")
	const number = document.createElement("p")
	const address = document.createElement("p")
	const addressPrint = document.createElement("img")

	times.textContent = "🕑 Aberto De 11 à 01:00 - Domingo e Segunda -até 18h"
	number.textContent = "📞 (31)3221-2099"
	address.textContent = "🏠 R. Flórida, 15 - Sion, Belo Horizonte"
	addressPrint.setAttribute("src", "https://iili.io/W0Tig9.png")
	addressPrint.setAttribute("width", 500)

	contactBody.appendChild(times)
	contactBody.appendChild(number)
	contactBody.appendChild(address)
	contactBody.appendChild(addressPrint)

	return contactBody
}

export default makeContact()
