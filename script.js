const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    `rgb(` +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    `)`;
  console.log(color);
});
