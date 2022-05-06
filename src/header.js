const menuItemList =["Home", "Menu", "Contact"]
function makeHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
	const h1 = document.createElement("h1")
	h1.textContent = "Bar do Antonio"
	const navBar = document.createElement("nav")
	navBar.classList.add("nav-bar")
	for (let i = 0; i < menuItemList.length; i++) {
		const navItem = document.createElement('a')
		navItem.textContent = menuItemList[i]
		navItem.setAttribute("id", `${menuItemList[i]}Btn`)
		navBar.appendChild(navItem)
	}
  header.appendChild(h1);
  header.appendChild(navBar);
  return header;
}

export default makeHeader();
