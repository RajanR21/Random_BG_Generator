const btn = document.querySelector("button");
console.log(btn);
const body = document.body;

const currentColor = document.querySelector(".current-color")

btn.addEventListener("click" , (e)=> {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red} , ${green} , ${blue})`

    currentColor.textContent = randomColor;
    body.style.backgroundColor = randomColor;

})