function randomInt(amplitude){
    let integer=Math.random();
    integer*=amplitude;
    integer=Math.floor(integer);
    return integer;
}

function drawLine(x1,y1,x2,y2){
    let newLine=document.createElementNS("http://www.w3.org/2000/svg","line");
    newLine.setAttribute("x1",x1);
    newLine.setAttribute("y1",y1);
    newLine.setAttribute("x2",x2);
    newLine.setAttribute("y2",y2);
    newLine.setAttribute("stroke","black");
    svg.appendChild(newLine);
}

function drawLine2(x1,y1,x2,y2,sw){
    let newLine2=document.createElementNS("http://www.w3.org/2000/svg","line");
    newLine2.setAttribute("x1",x1);
    newLine2.setAttribute("y1",y1);
    newLine2.setAttribute("x2",x2);
    newLine2.setAttribute("y2",y2);
    newLine2.setAttribute("stroke","black");
    newLine2.setAttribute("stroke-width",sw);
    svg.appendChild(newLine2);
}

function drawCircle(cx,cy,cr,opacity){
    cx=cx??randomInt(width);
    cy=cy??randomInt(height);
    cr=cr??randomInt(10);
    opacity=opacity??Math.random();
    let newCircle=document.createElementNS("http://www.w3.org/2000/svg","circle");
    newCircle.setAttribute("cx",cx);
    newCircle.setAttribute("cy",cy);
    newCircle.setAttribute("r",cr);
    newCircle.setAttribute("opacity",opacity);
    newCircle.setAttribute("fill","black");
    newCircle.setAttribute("stroke","black");
    svg.appendChild(newCircle);
}

function drawSnow(cx,cy,cr,opacity){
    cx=cx??randomInt(width);
    cy=cy??randomInt(height);
    cr=cr??randomInt(10);
    opacity=opacity??Math.random();
    let newCircle2=document.createElementNS("http://www.w3.org/2000/svg","circle");
    newCircle2.setAttribute("cx",cx);
    newCircle2.setAttribute("cy",cy);
    newCircle2.setAttribute("r",cr);
    newCircle2.setAttribute("opacity",opacity);
    newCircle2.setAttribute("fill","white");
    newCircle2.setAttribute("stroke","blue");
    svg.appendChild(newCircle2);
}

function drawNose(cx,cy,cr,opacity){
    let newCircle3=document.createElementNS("http://www.w3.org/2000/svg","circle");
    newCircle3.setAttribute("cx",cx);
    newCircle3.setAttribute("cy",cy);
    newCircle3.setAttribute("r",cr);
    newCircle3.setAttribute("opacity",opacity);
    newCircle3.setAttribute("fill","#AF110F");
    newCircle3.setAttribute("stroke","#AF110F");
    svg.appendChild(newCircle3);
}