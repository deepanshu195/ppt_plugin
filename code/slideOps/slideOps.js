const css = require("../helper/css");
const slideStyle = require("./slideStyle");

let getCurrentCountOfSlide = 0; // to be updated when fetching from db.
let isAnyActiveSlide;
let activeThumbnailId;
let activeMainSlideId;
let ppt_main_body_thumbnails = "ppt_main_body_thumbnails";
let ppt_slides_thumbnail_id = "ppt_slides_thumbnail_";

function addSlide() {
  let ppt_side_body_node = document.getElementById(ppt_main_body_thumbnails);
  let slideTemplate = basicSlideTemplate();

  slideTemplate.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(e.target.id);
  });

  ppt_side_body_node.append(slideTemplate);
  if (!isAnyActiveSlide) {
    showSlide(slideTemplate.id);
    isAnyActiveSlide = true;
  }
}

function showSlide(id) {
  console.log("show slide");
  // current active main slide active
  activeThumbnailId = id;

  let getSelectedNode = document.getElementById(id).cloneNode(true);
  if (activeMainSlideId) {
    document.getElementById(activeMainSlideId).remove();
  }
  let ppt_main_body_node = document.getElementById("ppt_main_body_slide");
  getSelectedNode.setAttribute("id", "ppt_slide_main_body_view");

  css(getSelectedNode, slideStyle.slideMain);
  getSelectedNode.contentEditable = true;
  activeMainSlideId = getSelectedNode.id;
  ppt_main_body_node.append(getSelectedNode);
  getSelectedNode.addEventListener("focusout", () => {
    saveClicked();
  });
}

function basicSlideTemplate() {
  let template = document.createElement("div");
  template.setAttribute(
    "id",
    ppt_slides_thumbnail_id + ++getCurrentCountOfSlide
  );
  css(template, slideStyle.slideTemplate);
  return template;
}

function saveClicked() {
  document.getElementById(activeThumbnailId).innerHTML = document
    .getElementById(activeMainSlideId)
    .cloneNode(true).innerHTML;
}

module.exports.addSlide = addSlide;
module.exports.saveClicked = saveClicked;
