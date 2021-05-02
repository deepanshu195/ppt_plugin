let template;
let ourdoc;
let getCurrentCountOfSlide = 0;
let isAnyActiveSlide;
var self = this;
let activeThumbnailId;
let activeMainSlideId;

function basicTemplate() {
  let button = document.createElement("button");
  button.innerHTML = "add slice";
  button.setAttribute("name", "add slide");
  button.setAttribute("value", "add slide");
  button.addEventListener("click", () => {
    addSlide();
  });
  ourdoc.getElementById("ppt_main_body_slide").appendChild(button);
}

function basicSlideTemplate() {
  let template = document.createElement("div");
  template.style.padding = "10px";
  template.style.margin = "10px";
  template.setAttribute(
    "id",
    "ppt_slide_thumbnail_" + getCurrentCountOfSlide++
  );
  template.style.boxSizing = "border-box";
  template.style.background = "white";
  template.style.height = "100px";
  template.style.border = "1px solid grey";
  template.style.borderRadius = "4px";
  template.style.overflow = "hidden";
  return template;
}

function addSlide() {
  let ppt_side_body_node = ourdoc.getElementById(
    "ppt_main_body_slide_thumbnail"
  );
  ppt_side_body_node.addEventListener("click", (e) => {
    console.log(e.target.id);
    showSlide(e.target.id);
  });
  let slideTemplate = basicSlideTemplate();
  ppt_side_body_node.append(slideTemplate);
  if (!isAnyActiveSlide) {
    showSlide(slideTemplate.id);
    isAnyActiveSlide = true;
    // console.log("inside", isAnyActiveSlide);
    // ppt_main_body_node.append(slideTemplate.cloneNode(true));
  }
}

function showSlide(id) {
  activeThumbnailId = id;
  console.log("showSlide called", id);
  let getSelectedNode = ourdoc.getElementById(id).cloneNode(true);
  console.log(getSelectedNode);
  if (activeMainSlideId) {
    ourdoc.getElementById(activeMainSlideId).remove();
  }
  let ppt_main_body_node = ourdoc.getElementById("ppt_main_body_slide");
  getSelectedNode.style.height = "640px";
  getSelectedNode.setAttribute("id", "ppt_slide_main_body_view");
  getSelectedNode.style.width = "600px";
  getSelectedNode.style.margin = "auto";
  getSelectedNode.style.marginTop = "20px";
  getSelectedNode.style.marginBottom = "20px";
  getSelectedNode.contentEditable = true;
  activeMainSlideId = getSelectedNode.id;
  ppt_main_body_node.append(getSelectedNode);
}

function saveClicked() {
  console.log(ourdoc.getElementById(activeThumbnailId));
  console.log(ourdoc.getElementById(activeMainSlideId));

  ourdoc.getElementById(activeThumbnailId).innerHTML = ourdoc
    .getElementById(activeMainSlideId)
    .cloneNode(true).innerHTML;
}

function deleteSlide(slideId) {}

function createPpt(args) {
  let { docId, style } = args;
  let iframeTemplate = document.createElement("iframe");
  iframeTemplate.setAttribute("src", "./ppt_plugin/index.html");
  iframeTemplate.setAttribute(
    "style",
    "width:500px; borderRadius:5px;height:700px;"
  );
  if (style) {
    iframeTemplate.setAttribute("style", style);
  }
  document.getElementById(docId).append(iframeTemplate);
  iframeTemplate.onload = function () {
    ourdoc = iframeTemplate.contentDocument;
    basicTemplate();

    ourdoc.addEventListener(
      "keydown",
      (e) => {
        if (
          (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) &&
          e.keyCode == 83
        ) {
          e.preventDefault();
          saveClicked();
          // Process the event here (such as click on submit button)
          console.log("control and save clicked.");
        }
      },
      false
    );
  };
}
console.log("ppt called");
window.createPpt = createPpt;
