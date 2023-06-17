const btnOneEl = document.querySelector(".btn.one");
const btnTwoEl = document.querySelector(".btn.two");
const shareLinkEl = document.querySelector(".share-link");


btnOneEl.addEventListener("click", () => {
    shareLinkEl.style.visibility = "visible";
})

btnTwoEl.addEventListener("click", () => {
    shareLinkEl.style.visibility = "hidden";
})