let table_tray_sub_component_color= "RGB(69, 84, 97)"
let  table_tray_sub_color = "RGB(49, 65, 82)"
let wheatColor = "wheat";
module.exports = {
  body: {
    margin: "0px !important",
    height: "100vh",
  },
  ppt_main_body: {
    display: "flex",
    height: "100%",
  },
  ppt_main_body_slide: {
    width: "65%",
    "background-color": "grey",
    border: "1px solid black",
    "border-radius": "2px",
    overflow: "auto",
  },
  ppt_main_body_thumbnails: {
    width: "15%",
    "background-color": "#e7e5e5",
    "overflow-y": "auto",
    border: "1px solid grey",
    padding: "10px",
    "border-radius": "2px",
  },
  table_tray_style:{
    display:"flex",
    width:"20%",
    cursor:"pointer"
  },
  table_tray_head_style:{
    background:"RGB(42, 49, 64)",
    width:"35%",
    cursor:"default",
    padding:"5px 0px"
  
  },
  table_tray_sub_style:{
    background: table_tray_sub_color,
    width:"65%",
    cursor:"default",
    padding:"5px 8px"
  },
  table_tray_head_compoents_style:{
    cursor:"pointer",
    padding:'10px',
    color:wheatColor
  },
  table_tray_sub_compoents_style:{
    cursor:"pointer",
    padding:"15px 8px",
    color:wheatColor,
    background: table_tray_sub_component_color,
    "text-align":"center",
    "margin-top":"8px",
    "border-radius":"7px",
    border:`1px solid ${table_tray_sub_component_color}`
  },
  table_tray_sub_component_color,
  wheatColor,
  table_tray_sub_color
};
