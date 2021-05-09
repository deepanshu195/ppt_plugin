const css = require("../helper/css");
const schema = require("../schema/schema");
const merge = require("../helper/merge");
const schemaStyle = require("../schema/schemaStyle");
const slideOps = require("../slideOps/slideOps");

function createPpt(args) {
  let { docId, style } = args;

  document.getElementById(docId).innerHTML = schema;
  css(
    document.getElementById(docId),
    merge({ width: "500px", "border-radius": "5px", height: "700px" }, style)
  );

  css(document.getElementById("ppt_main_body"), schemaStyle.ppt_main_body);
  css(
    document.getElementById("ppt_main_body_slide_thumbnail"),
    schemaStyle.ppt_main_body_slide_thumbnail
  );
  css(
    document.getElementById("ppt_main_body_slide"),
    schemaStyle.ppt_main_body_slide
  );

  basicTemplate();

  document.addEventListener(
    "keydown",
    (e) => {
      if (
        (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) &&
        e.keyCode == 83
      ) {
        e.preventDefault();
        slideOps.saveClicked();
      }
    },
    false
  );
}

function basicTemplate() {
  let button = document.createElement("button");
  button.innerHTML = "Add Slide";
  button.setAttribute("name", "Add Slide");
  button.setAttribute("value", "Add Slide");
  button.addEventListener("click", () => {
    slideOps.addSlide();
  });
  document.getElementById("ppt_main_body_slide").appendChild(button);
}

module.exports = createPpt;
