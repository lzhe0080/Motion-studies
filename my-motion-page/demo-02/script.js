var svg = document.getElementById("svg");
svg.setAttribute("viewBox", "0 0 500 500");
svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

//The dark night.
drawRect(0,0,500,500,"black",null,null);

//the stars of two sizes.
for(i=0;i<20;i++){
    drawStar(null,null,1,"white");
    drawBigStar(null,null,1,"white")
}

//The tree on the left and the grass.
svg.appendChild(createLine(120,430,120,490,2,"olive"));
drawCircle(120,400,40,"lime",null);
drawCircle(140,620,140,"teal",null);//The grass

//The tree on the right.
svg.appendChild(createLine(460,500,460,400,4,"darkgoldenrod"));
drawCircle(460,360,40,"darkkhaki",null);
drawCircle(460,200,40,"darkkhaki",null);
drawRect(420,200,80,160,"darkkhaki",null,null);

//The building on the left.
drawRect(220,280,120,220,"silver","grey",2);
drawCircle(260,340,40,"grey",null,null)
drawRect(220,340,80,160,"grey",null,null);
for(i=0;i<=2;i++){
    drawRect(160+i*40,460-i*40,140-i*40,40+i*40,"lightblue",null,null);//the stairs
}
drawCircle(310,250,30,"orange",null)
drawRect(280,220,60,30,"black",null,null);//The semicircular decoration.

//The rolling ball.
let m = randomRoundedValue(600);
if(m>400 && m<600){
    svg.appendChild(createBall(null,360,40,240,20,"blue","blue"));
}else if(m<200){
    svg.appendChild(createBall(null,400,20,200,20,"blue","blue"));
}else{
    svg.appendChild(createBall(null,440,20,160,20,"blue","blue"));
}

//The building on the right.
drawCircle(390,140,50,"silver","grey");
drawRect(340,400,100,100,"silver","grey",2);
drawRect(340,140,100,260,"dimgrey","grey",2);
drawRect(360,470,60,30,"black",null,2);
drawCircle(390,470,30,"black",null);
drawCircle(390,190,38,"black","black");//The clock.
drawCircle(390,190,33,"white","black");
svg.appendChild(createLine(390,190,410,190,2,"black"));//The hour hand.

//The randomly changing minute hand.
let n = randomRoundedValue(700);
if(m<700 && m>=600){
    svg.appendChild(createLine(390,190,390,160,2,"black"));
}else if(m<600 && m>=500 ){
    svg.appendChild(createLine(390,190,390,220,2,"black"));
}else if(m<500 && m>=400 ){
    svg.appendChild(createLine(390,190,412,212,2,"black"));
}else if(m<400 && m>=300){
    svg.appendChild(createLine(390,190,368,212,2,"black"));
}else if(m<300 && m>=200){
    svg.appendChild(createLine(390,190,368,168,2,"black"));
}else if(m<200 && m>=100){
    svg.appendChild(createLine(390,190,412,168,2,"black"));
}else{
    svg.appendChild(createLine(390,190,360,190,2,"black"));
}

//The title.
let title = document.createElementNS("http://www.w3.org/2000/svg","text");
title.setAttribute("x",80);
title.setAttribute("y",490);
title.setAttribute("text-anchor","middle");
title.setAttribute("fill","white");
title.innerHTML = "Night flows away.";
svg.appendChild(title);