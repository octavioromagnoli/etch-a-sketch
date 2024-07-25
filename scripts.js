function createSquares(mainContainer, amount, height, borderPx) {
  mainContainer.innerHTML = "";
  mainContainer.style.cssText = `width: ${(height + borderPx*2) * amount}px;`;
  for (let i = 0; i < amount; i++) {
    for (let j = 0; j < amount; j++) {
      let squareDiv = document.createElement("div");
      squareDiv.setAttribute("class", "squareDiv");
      squareDiv.style.cssText = `height: ${height}px; width: ${height}px; border: ${borderPx}px solid;`;
      mainContainer.appendChild(squareDiv);
    }
  }
}

const mainContainer = document.querySelector(".main-container");
createSquares(mainContainer, 14, 30, 3);

mainContainer.addEventListener("mousemove", (event) =>{
  let target = event.target;
  if(target.className === "squareDiv"){
    target.classList.add("selected");
  }
})

