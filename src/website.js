import makeHeader from "./header";
import makeHome from "./home"
import makeMenu from "./menu"
import makeContact from "./contact"

const body = document.body;
const content = document.createElement("div");
const header = makeHeader
const home = makeHome
const menu = makeMenu
const contact = makeContact


function showHome(){
	const menuBtn = document.getElementById("MenuBtn")
	const homeBtn = document.getElementById("HomeBtn")
	const contactBtn = document.getElementById("ContactBtn")
	menu.classList.add("hidden")
	home.classList.remove("hidden")
	contact.classList.add("hidden")
	homeBtn.classList.add("active")
	menuBtn.classList.remove("active")
	contactBtn.classList.remove("active")
}

function showMenu(){
	const menuBtn = document.getElementById("MenuBtn")
	const homeBtn = document.getElementById("HomeBtn")
	const contactBtn = document.getElementById("ContactBtn")
	menu.classList.remove("hidden")
	home.classList.add("hidden")
	contact.classList.add("hidden")
	homeBtn.classList.remove("active")
	menuBtn.classList.add("active")
	contactBtn.classList.remove("active")
}

function showContact(){
	const menuBtn = document.getElementById("MenuBtn")
	const homeBtn = document.getElementById("HomeBtn")
	const contactBtn = document.getElementById("ContactBtn")
	menu.classList.add("hidden")
	home.classList.add("hidden")
	contact.classList.remove("hidden")
	homeBtn.classList.remove("active")
	menuBtn.classList.remove("active")
	contactBtn.classList.add("active")
}

function makeWebsite() {
  content.setAttribute("id", "content");
	content.classList.add("background")
  body.appendChild(content);
  content.appendChild(header);
	content.appendChild(home)
	content.appendChild(menu)
	content.appendChild(contact)

	const homeBtn = document.getElementById("HomeBtn")
	homeBtn.classList.add("active")
	const menuBtn = document.getElementById("MenuBtn")
	const contactBtn = document.getElementById("ContactBtn")

	homeBtn.addEventListener('click', showHome)
	menuBtn.addEventListener('click', showMenu)
	contactBtn.addEventListener('click', showContact)
}

export default makeWebsite()
