function drawRect(inputXPos, inputYPos, inputWidth, inputHeight, inputColour){
    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRectangle.setAttribute("x", inputXPos);
    newRectangle.setAttribute("y", inputYPos);
    newRectangle.setAttribute("width", inputWidth);
    newRectangle.setAttribute("height", inputHeight);
    newRectangle.setAttribute("fill", inputColour);
    svg.appendChild(newRectangle);
}

function drawCircle(inputXPos, inputYPos, inputRadius, inputStroke, inputColour){
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", inputXPos);
    newCircle.setAttribute("cy", inputYPos);
    newCircle.setAttribute("r", inputRadius);
    newCircle.setAttribute("stroke", inputStroke);
    newCircle.setAttribute("fill", inputColour);
    svg.appendChild(newCircle);
}

function drawLine(inputX1Pos, inputY1Pos, inputX2Pos, inputY2Pos, inputStrokeWidth, inputColour){
    let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine.setAttribute("x1", inputX1Pos);
    newLine.setAttribute("y1", inputY1Pos);
    newLine.setAttribute("x2", inputX2Pos);
    newLine.setAttribute("y2", inputY2Pos);
    newLine.setAttribute("stroke", inputColour);
    newLine.setAttribute("stroke-width", inputStrokeWidth);
    svg.appendChild(newLine);
}

function CreateText(inputXPos, inputYPos, inputText){
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text"); // Create a text element
    text.setAttribute("x", inputXPos); 
    text.setAttribute("y", inputYPos); 
    text.setAttribute("text-anchor", "start"); 
    text.setAttribute("fill", "blue"); 
    text.innerHTML = inputText;
    return text;
}

