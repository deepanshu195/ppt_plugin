const css = require("../helper/css");
const schema = require("../schema/schema");
const merge = require("../helper/merge");
const schemaStyle = require("../schema/schemaStyle");
const slideOps = require("../slideOps/slideOps");
let ppt_main_body = "ppt_main_body";

let {createTray} = require("../tableTray/index")
const createNode = require("../createNode/drawDiv");

function createPpt(args) {
  let { docId, style } = args;

  document.getElementById(docId).innerHTML = schema;
  css(
    document.getElementById(docId),
    merge({ width: "1200px", "border-radius": "5px", height: "700px" }, style)
  );
  let main_node = document.getElementById(ppt_main_body);
  css(main_node, schemaStyle.ppt_main_body);
  main_node.appendChild(createTray());
  css(
    document.getElementById("ppt_main_body_thumbnails"),
    schemaStyle.ppt_main_body_thumbnails
  );

  css(
    document.getElementById("ppt_main_body_slide"),
    schemaStyle.ppt_main_body_slide
  );

  basicTemplate();

  createNode(document.getElementById("ppt_main_body_slide"));

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
