function randomRoundedValue(maxValue){
    return Math.round(Math.random() * maxValue);
}

function drawRect(inputXPos, inputYPos, inputWidth, inputHeight, inputColor,inputStroke,inputStrokeWidth){
    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRectangle.setAttribute("x", inputXPos);
    newRectangle.setAttribute("y", inputYPos);
    newRectangle.setAttribute("width", inputWidth);
    newRectangle.setAttribute("height", inputHeight);
    newRectangle.setAttribute("fill", inputColor);
    newRectangle.setAttribute("stroke", inputStroke);
    newRectangle.setAttribute("stroke-width",inputStrokeWidth);
    svg.appendChild(newRectangle);
}

function drawStar(inputX1Pos, inputY1Pos, inputStrokeWidth, inputColour, maxWidth=500, maxHeight=500){
    let outputX1Pos = inputX1Pos ?? randomRoundedValue(maxWidth);
    let outputY1Pos = inputY1Pos ?? randomRoundedValue(maxHeight);
    let outputX2Pos = outputX1Pos;
    let outputY2Pos = outputY1Pos+5;
    let outputStrokeWidth = inputStrokeWidth ?? randomRoundedValue(5);

    let outputX3Pos = outputX1Pos-2.5;
    let outputY3Pos = outputY1Pos+2.5;
    let outputX4Pos = outputX1Pos+2.5;
    let outputY4Pos = outputY3Pos;

    let newLine1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine1.setAttribute("x1", outputX1Pos);
    newLine1.setAttribute("y1", outputY1Pos);
    newLine1.setAttribute("x2", outputX2Pos);
    newLine1.setAttribute("y2", outputY2Pos);
    newLine1.setAttribute("stroke-width", outputStrokeWidth);
    newLine1.setAttribute("stroke", inputColour);

    svg.appendChild(newLine1);

    let newLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine2.setAttribute("x1", outputX3Pos);
    newLine2.setAttribute("y1", outputY3Pos);
    newLine2.setAttribute("x2", outputX4Pos);
    newLine2.setAttribute("y2", outputY4Pos);
    newLine2.setAttribute("stroke-width", outputStrokeWidth);
    newLine2.setAttribute("stroke", inputColour);

    svg.appendChild(newLine2);
}

function drawBigStar(inputX1Pos, inputY1Pos, inputStrokeWidth, inputColour, maxWidth=500, maxHeight=500){
    let outputX1Pos = inputX1Pos ?? randomRoundedValue(maxWidth);
    let outputY1Pos = inputY1Pos ?? randomRoundedValue(maxHeight);
    let outputX2Pos = outputX1Pos;
    let outputY2Pos = outputY1Pos+10;
    let outputStrokeWidth = inputStrokeWidth ?? randomRoundedValue(5);

    let outputX3Pos = outputX1Pos-5;
    let outputY3Pos = outputY1Pos+5;
    let outputX4Pos = outputX1Pos+5;
    let outputY4Pos = outputY3Pos;

    let newLine1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine1.setAttribute("x1", outputX1Pos);
    newLine1.setAttribute("y1", outputY1Pos);
    newLine1.setAttribute("x2", outputX2Pos);
    newLine1.setAttribute("y2", outputY2Pos);
    newLine1.setAttribute("stroke-width", outputStrokeWidth);
    newLine1.setAttribute("stroke", inputColour);

    svg.appendChild(newLine1);

    let newLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine2.setAttribute("x1", outputX3Pos);
    newLine2.setAttribute("y1", outputY3Pos);
    newLine2.setAttribute("x2", outputX4Pos);
    newLine2.setAttribute("y2", outputY4Pos);
    newLine2.setAttribute("stroke-width", outputStrokeWidth);
    newLine2.setAttribute("stroke", inputColour);

    svg.appendChild(newLine2);
}

function drawCircle(inputXPos, inputYPos, inputRadius, inputColor,inputStroke){
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", inputXPos);
    newCircle.setAttribute("cy", inputYPos);
    newCircle.setAttribute("r", inputRadius);
    newCircle.setAttribute("fill", inputColor);
    newCircle.setAttribute("stroke", inputStroke);

    svg.appendChild(newCircle);
}

function createLine(inputX1Pos, inputY1Pos, inputX2Pos, inputY2Pos, inputStrokeWidth, inputColour){
    let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine.setAttribute("x1", inputX1Pos);
    newLine.setAttribute("y1", inputY1Pos);
    newLine.setAttribute("x2", inputX2Pos);
    newLine.setAttribute("y2", inputY2Pos);
    newLine.setAttribute("stroke-width", inputStrokeWidth);
    newLine.setAttribute("stroke", inputColour);
    
    return newLine;
}


function createBall(inputXPos, inputYPos, inputRange, inputStart, inputRadius, inputColor,inputStroke){
    let outputXPos = inputXPos ?? (randomRoundedValue(inputRange)+inputStart);
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", outputXPos);
    newCircle.setAttribute("cy", inputYPos);
    newCircle.setAttribute("r", inputRadius);
    newCircle.setAttribute("fill", inputColor);
    newCircle.setAttribute("stroke", inputStroke);

    return newCircle;
}
