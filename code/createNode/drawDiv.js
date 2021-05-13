const css = require("../helper/css");
const divStyle = require("./drawDivStyle");

function initDraw(canvas) {
  var mouse = {
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
  };
  var element = null;
  function setMousePosition(e) {
    mouse.x = e.pageX - canvas.offsetLeft;
    mouse.y = e.pageY - canvas.offsetTop;
    document.getElementById(
      "infoBox"
    ).innerHTML = `x : ${mouse.x} , y : ${mouse.y}`;
  }
  canvas.onmousedown = function (e) {
    mouse.startX = e.pageX - canvas.offsetLeft;
    mouse.startY = e.pageY - canvas.offsetTop;
    element = document.createElement("div");
    css(element, divStyle.createRectangle);
    element.style.left = mouse.startX + "px";
    element.style.top = mouse.startY + "px";
    canvas.append(element);
    canvas.style.cursor = "crosshair";
  };
  canvas.onmousemove = function (e) {
    setMousePosition(e);
    element.style.width = Math.abs(mouse.x - mouse.startX) + "px";
    element.style.height = Math.abs(mouse.y - mouse.startY) + "px";
    element.style.left =
      mouse.x - mouse.startX < 0 ? mouse.x + "px" : mouse.startX + "px";
    element.style.top =
      mouse.y - mouse.startY < 0 ? mouse.y + "px" : mouse.startY + "px";
  };
  canvas.onmouseup = function (e) {
    if (element !== null) {
      element = null;
      canvas.style.cursor = "default";
    }
  };
  var infoBox = document.createElement("div");
  infoBox.style.width = "100px";
  infoBox.style.width = "100px";
  infoBox.style.border = "1px solid blue";
  infoBox.style.textAlign = "center";
  infoBox.style.position = "absolute";
  infoBox.setAttribute("id", "infoBox");
  document.body.appendChild(infoBox);
}

module.exports = initDraw;
