var width = 380;
var height = 480;
var svg = document.getElementById("basesvg");
console.log(svg);
svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
console.log(svg);
//The following is the process of drawing the branches on the right. 
drawLine(240,480,263,400);
drawLine(260,480,263,440);
drawLine(263,440,280,400);
drawLine(280,400,360,280);
drawLine(275,393,360,280);
drawLine(263,400,273,367);
drawLine(275,393,280,367);
drawLine(280,367,272,350);
drawLine(273,367,260,345);
drawLine(272,350,280,308);
drawLine(268,345,280,308);
drawLine(250,300,268,345);
drawLine(260,345,250,300);
//The following is the process of drawing the branches on the left. 
drawLine(205,480,182,380);
drawLine(182,380,160,335);
drawLine(225,480,185,360);
drawLine(185,360,200,280);
drawLine(200,280,188,312);
drawLine(188,312,175,260);
drawLine(175,260,183,320);
drawLine(183,320,180,345);
drawLine(180,345,168,330);
drawLine(168,330,160,300);
drawLine(160,300,120,260);
drawLine(120,260,153,302);
drawLine(153,302,158,325);
drawLine(158,325,30,290);
drawLine(30,290,130,325);
drawLine(110,340,130,325);
drawLine(140,330,110,340);
drawLine(160,335,140,330);
//The following is the process of drawing the leaves on the left branches. 
drawCircle(20,470,30,0.7);
drawCircle(80,500,60,1);
drawCircle(45,275,30,0.5);
drawCircle(70,310,20,0.8);
drawCircle(110,320,10,0.3);
drawCircle(65,360,12,1);
drawCircle(150,350,20,0.6);
drawCircle(142,308,5,1);
drawCircle(130,250,9,0.8);
drawCircle(160,275,18,0.3);
drawCircle(202,305,15,0.6);
drawCircle(200,333,10,1);
drawCircle(210,350,5,0.3);
drawCircle(175,418,10,0.8);
//The following is the process of drawing the leaves on the right branches. 
drawCircle(350,280,22,0.5);
drawCircle(370,370,10,0.3);
drawCircle(320,320,12,0.5);
drawCircle(336,308,8,1);
drawCircle(250,300,10,0.7);
drawCircle(265,330,7,1);
drawCircle(326,490,60,1);
//The following is the process of drawing the lines between the two branches.
drawLine2(160,458,272,458,2);
drawLine2(175,463,270,463,1);
drawLine2(140,473,275,473,4);
drawLine2(170,478,270,478,2);
//The following is the process of drawing the leaves in the sky.
drawCircle(90,148,30,1);
drawCircle(85,205,3,1);
drawCircle(118,180,16,0.8);
drawCircle(132,210,10,0.5);
drawCircle(165,85,8,1);
drawCircle(200,105,8,1);
drawCircle(210,168,20,0.6);
drawCircle(230,220,28,0.9);
drawCircle(280,238,38,0.8);
drawCircle(110,50,2,1);
/*
//Another warm and happy version of this assignment.
//The following is the process of drawing the snowman.
drawSnow(100,430,30,1);//body
drawSnow(100,380,20,1);//head
drawNose(100,380,2,1);//nose
drawLine(95,386,100,391);//mouth
drawLine(100,391,105,386);
drawLine(92,370,89,375);//eyes
drawLine(92,370,95,375);
drawLine(108,370,105,375);
drawLine(108,370,111,375);
*/
//The following is the process of drawing the snow.
for (let i = 0; i < 35; i++) drawSnow();