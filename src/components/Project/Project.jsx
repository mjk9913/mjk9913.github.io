import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard.jsx'

function Project() {
  return(
    <div class="exp"> 
      <div class="title" style={{paddingRight: `80px`}}>projects</div>
      <div class="card-div">
      <ProjectCard
        link = {"https://github.com/mjk9913/raccoon-jump"}
        pic = {"./raccoonjump.png"}
        name = {"Raccoon Jump"}
        desc = {"Designed and developed a game inspired by nostalgic Ninja Jump with raccoon avoiding falling coconuts using Python, Processing and implementing object-orientated design."}
        techs = {"Python, Processing"}
      />
      <ProjectCard
        link = {"https://github.com/dktpt44/Networks_Project1"}
        pic = {"./sincerelycover.png"}
        name = {"Sincerly,"}
        desc = {"Ideated and spearheaded front-end development of project of matching users with ideal pen pal on their Myers-Briggs personality using Machine Learning to analyze their most recent Twitter tweets, using Figma, HTML, CSS, Javascript."}
        techs = {"HTML5/CSS, Javascript"}
      />

      <ProjectCard
        link = {"https://github.com/catekat16/TechTogetherTeam"}
        pic = {"./ftp.jpeg"}
        name = {"C/C++ Practice"}
        desc = {"Created a C++ program which resembles terminal line commands, such as pwd,ls,cd,mv,etc. Developed simplified File Transfer Protocol in a Client ‐ Server model using C in an UNIX environment"}
        techs = {"C/C++"}
      />

      <ProjectCard
        link = {"https://github.com/tripletk/4yearplan"}
        pic = {"./4yearplanner.png"}
        name = {"Four Year Plan Website"}
        desc = {"Website that enables college students to plan out and customize their four year plan. Allowed team to jump start development by designing entirety of website using Figma within an hour. \nDeveloped front‐end of project website (login, form, sign‐in, sign‐up page)using HTML, CSS, Javascript."}
        techs = {"Vanilla HTML/CSS/Javascript, Node.js"}
        />

      </div>
    </div>

  )
  
}

export default Project;