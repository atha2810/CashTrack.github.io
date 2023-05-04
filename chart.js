// SELECT CHART ELEMENT
const chart = document.querySelector(".chart");

// CREATE CANVAS ELEMMENT
const canvas = document.createElement("canvas");
canvas.width = 90;
canvas.height = 80;

// APPEND CANVAS TO CHART ELEMENT
chart.appendChild(canvas);

// TO DRAW ON CANVAS, WE NEED TO GET CONTEXT OF CANVAS
const ctx = canvas.getContext("2d");

// CHANGE THE LINE WIDTH
ctx.lineWidth = 9.5;

// CIRCLE RADIUS
const R = 30;

function drawCircle(color, ratio, anticlockwise){

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart( income, outcome){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income+outcome);

    drawCircle("#fff", - ratio, true);
    drawCircle("#ed5a44", 1 - ratio, false);
    
}