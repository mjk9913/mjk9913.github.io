import React from 'react';
import './pCard.css';
const ProjectCard = ({name,pic,desc,link,techs}) => {
  
  return (
    
    <div class="card">
        <div class="pImage"style={{backgroundImage: `url(${pic})`}} onClick={()=>window.open(link)}></div>
        <div class="pText">
          <div class="pName">{name}</div>
          <div class="pDate"><i>{techs}</i></div>
          <div class="pDesc">{desc}</div>
        </div>
    </div >
  )
}

export default ProjectCard;