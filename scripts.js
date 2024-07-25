function createSquares(amount, height, borderPx) {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.style.cssText = `width: ${(height + borderPx*2) * amount}px; margin: 20px auto;`;
  for (let i = 0; i < amount; i++) {
    for (let j = 0; j < amount; j++) {
      let squareDiv = document.createElement("div");
      squareDiv.setAttribute("class", "squareDiv");
      mainContainer.appendChild(squareDiv);
    }
    let skipLine = document.createElement("br");
    mainContainer.appendChild(skipLine);
  }
}

createSquares(10, 30, 1);