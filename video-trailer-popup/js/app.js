const dialog = document.getElementById("dialog");
const openButton = document.querySelector(".btn");
const closeButton = document.querySelector(".close");
const video = document.querySelector("dialog video");

openButton.addEventListener("click", () => {
    dialog.showModal()
})

closeButton.addEventListener("click", () => {
    dialog.close()
    video.pause()
})