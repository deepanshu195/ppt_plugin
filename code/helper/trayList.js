let trayObject = {
  basic: {
    components: [
      {
        name: "Box",
        id: "ppt_main_body_basic_component_box_id",
        className: "",
        onClick: function () {
          console.log("Text clicked");
        },
        url: "",
        isSelected:false
      },
      {
        name: "Bigger box",
        id: "ppt_main_body_basic_component_bigger_box_id",
        className: "",
        onClick: function () {
          console.log("Text clicked");
        },
        url: "",
        isSelected:false
      },
    ],
    name: "Basic",
    id: "ppt_main_body_basic_component",
    isSelected:true
  },
  image: {
    components: [
      {
        name: "Upload image",
        id: "ppt_main_body_image_component_image_id",
        className: "",
        onClick: function () {
          console.log("image clicked");
        },
        url: "",
        isSelected:false
      },
      {
        name: "Video",
        id: "ppt_main_body_image_component_video_id",
        className: "",
        onClick: function () {
          console.log("video clicked");
        },
        url: "",
        isSelected:false
      },
      {
        name: "Audio",
        id: "ppt_main_body_image_component_audio_id",
        className: "",
        onClick: function () {
          console.log("audio clicked");
        },
        url: "",
        isSelected:false
      },
    ],
    name: "Media",
    id: "ppt_main_body_image_component",
    isSelected:false
  },
};

module.exports = {
  trayObject,
};
