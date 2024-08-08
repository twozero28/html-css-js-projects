const body = document.querySelector("body");

const createHeart = (e) => {
    const img = document.createElement("img");
    img.src = "./assets/heart_icon.svg";
    img.classList.add("heart");

    body.appendChild(img);
    img.style.top = `${e.offsetY}px`;
    img.style.left = `${e.offsetX}px`;
    img.style.width = `${Math.random() * 100}px`;
    img.style.height = `${Math.random() * 100}px`;

    setTimeout(() => {
        img.remove();
    }, 1500)
}

body.addEventListener("mousemove", createHeart)