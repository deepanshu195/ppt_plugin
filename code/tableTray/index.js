
const css = require("../helper/css");
const schemaStyle = require("../schema/schemaStyle");

let { trayObject } = require("../helper/trayList");


function removeSubTraySelected(){
  document.getElementById("ppt_main_body_tray_sub").childNodes.forEach(singleChildNode=>{
    singleChildNode.classList.remove("active");
    singleChildNode.style.backgroundColor = schemaStyle.table_tray_sub_component_color
  })
}


function trayDataPopulate(selectedNodeId,node,){
  console.log(selectedNodeId)
  let subTray =  document.getElementById("ppt_main_body_tray_sub") || node;

  
  Object.keys(trayObject).forEach((val) => {
    if(trayObject[val].id==selectedNodeId){
      subTray.innerHTML = "";
      
    Object.keys(trayObject[val].components).forEach(val2=>{
      let subTrayText = document.createElement("div") //
      subTrayText.setAttribute("id",trayObject[val]["components"][val2].id);
      subTrayText.innerText =  trayObject[val]["components"][val2].name 
      css(subTrayText,schemaStyle.table_tray_sub_compoents_style);

      subTrayText.addEventListener("mouseenter",function(e){
        e.target.style.borderColor = schemaStyle.wheatColor;
      });
      
      subTrayText.addEventListener("mouseleave",function(e){
        e.target.style.borderColor= schemaStyle.table_tray_sub_component_color
      });
      
      subTrayText.addEventListener("click",function(e){
          let selectedSubNode = document.getElementById(e.target.id);
      console.log(selectedSubNode)
          selectedSubNode.parentNode.childNodes.forEach(singleChildNode=>{
            console.log(singleChildNode.id,e.target.id)
            if(singleChildNode.id == e.target.id){
              singleChildNode.classList.add("active"); 
              singleChildNode.style.backgroundColor = "rgb(69, 84, 38)"
              console.log()
            }else{
              singleChildNode.classList.remove("active");
              singleChildNode.style.backgroundColor = schemaStyle.table_tray_sub_component_color
            }
            })
          })
          
      

      subTray.appendChild(subTrayText)
    })
  }

  });
  return subTray

}

function createTray() {
  // main table tray
  let tableTray = document.createElement("div")
  let selectedNodeId=null;
  tableTray.setAttribute("id","ppt_main_body_tray");
  // tableTray.style.display="inline-block";
  // tableTray.style.width="20%";
  css(tableTray,schemaStyle.table_tray_style)
  
  // table tray head/main
  let headTray = document.createElement("div")
  headTray.setAttribute("id","ppt_main_body_tray_head")
  css(headTray,schemaStyle.table_tray_head_style);
  
  
  // table tray subheading/subElements
  let subTray = document.createElement("div")
  subTray.setAttribute("id","ppt_main_body_tray_sub")
  css(subTray,schemaStyle.table_tray_sub_style);

  Object.keys(trayObject).forEach((val) => {
    let trayHeadText = document.createElement("div");
    trayHeadText.setAttribute("id",trayObject[val].id);
    trayHeadText.innerText = trayObject[val].name;

    css(trayHeadText,schemaStyle.table_tray_head_compoents_style);
        trayHeadText.addEventListener("mouseenter",function(e){
          e.target.style.color ="white";
        });
        
        trayHeadText.addEventListener("mouseleave",function(e){
          e.target.style.color =  schemaStyle.wheatColor
        });
    
    if(trayObject[val].isSelected){
        trayHeadText.classList.add("active");
        trayHeadText.style.backgroundColor=schemaStyle.table_tray_sub_color;
        selectedNodeId=trayHeadText.id;
     }


    //  for head tray animations
    trayHeadText.addEventListener("click",(e)=>{
      console.log("clciked")
      let selectedNode = document.getElementById(e.target.id);
      let updateClass = false;
       let parentNode =  selectedNode.parentNode;
       parentNode.childNodes.forEach(node=>{
        let classes =  node.classList ;
        classes.forEach((singleClass) => {
          if(singleClass=="active"){
            if(selectedNode.id !== node.id ){
              updateClass=true;
              node.classList.remove("active");
              node.style.backgroundColor="inherit";
            }
          }
        })
        
       });
       selectedNode.classList.add("active");
       if(updateClass){
         selectedNode.style.backgroundColor = schemaStyle.table_tray_sub_color
          trayDataPopulate(selectedNode.id) 
        }
    })
    headTray.append(trayHeadText);
  });
  

  tableTray.appendChild(headTray)
  tableTray.appendChild(trayDataPopulate(selectedNodeId,subTray))
return tableTray;
}


module.exports={createTray,removeSubTraySelected}