const imgs = document.querySelectorAll("img");
const exit = document.querySelector("#exit");

exit.onchange = (e) => {
    const popup = document.querySelector(".popup");
    popup.classList.remove("is-active");
}

if (imgs !== null) {
    imgs.forEach((el) => {
        el.onclick = (e) => {
            const popup = document.querySelector(".popup");
            popup.classList.add("is-active");
            popup.querySelector("img").src = e.target.src;
        }
    })
}