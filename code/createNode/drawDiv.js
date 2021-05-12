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
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  }
  canvas.onmousedown = function (e) {
    mouse.startX = e.pageX;
    mouse.startY = e.pageY;
    element = document.createElement("div");
    css(element, divStyle.createRectangle);
    element.style.left = mouse.startX + "px";
    element.style.top = mouse.startY + "px";
    canvas.appendChild(element);
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
}

module.exports = initDraw;
