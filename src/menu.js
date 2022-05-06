const menu = {
  prato1: {
    name: "Carnoba",
    image:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/ed735434-1751-429a-a477-f5e04c8b37d8/202005071701_Jlys_c.png",
  },
  prato2: {
    name: "Parmegiana",
    image:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/ed735434-1751-429a-a477-f5e04c8b37d8/202005071702_WN7x_p.png",
  },
  prato3: {
    name: "Costelinha Embriagada",
    image:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/ed735434-1751-429a-a477-f5e04c8b37d8/202005071640_kr63_c.png",
  },
  prato4: {
    name: "Executivo de Medalhão",
    image:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/ed735434-1751-429a-a477-f5e04c8b37d8/202006081045_kQEh_p.jpg",
  },
  prato5: {
    name: "Picanha",
    image:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/ed735434-1751-429a-a477-f5e04c8b37d8/202006081050_VvAe_p.jpg",
  },
  prato6: {
    name: "Croquete de Costela",
    image:
      "https://static-images.ifood.com.br/image/upload/t_medium/pratos/ed735434-1751-429a-a477-f5e04c8b37d8/202006161210_dHJP_c.jpg",
  },
};

function makeMenu() {
  const menuBody = document.createElement("div");
	menuBody.classList.add("main-content")
	menuBody.classList.add("menu")
	menuBody.classList.add("hidden")
	menuBody.setAttribute("id", "menu")
  for (let key in menu) {
		const menuItem = document.createElement("div")
    const nameOfDish = document.createElement("p");
    const picOfDish = document.createElement("img");
    nameOfDish.textContent = menu[key].name;
    picOfDish.setAttribute("src", menu[key].image);
    picOfDish.setAttribute("height", "350");
    picOfDish.setAttribute("width", "350");
		picOfDish.classList.add("pic-img")
    menuItem.appendChild(nameOfDish);
    menuItem.appendChild(picOfDish);
		menuBody.appendChild(menuItem)
  }

  return menuBody;
}

export default makeMenu();
