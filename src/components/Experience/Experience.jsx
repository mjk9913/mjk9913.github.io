import React from 'react'
import ExpCard from './ExpCard.jsx'
import './experience.css'

function Experience() {
  return (
    <div className="experience" style={{height: `auto`, paddingTop: `100px`}}>
      <div className="title" style={{zIndex: `99`, marginRight: `12px`}}>experience</div>
      <div className = "expDiv">

      <ExpCard 
      expC = "Gem Factory"
      expT = "IT Intern"
      expD = "Jul. 2022 - Current"
      expS = "Sharpening and assembling source code to collect data related to Korea's popular animation and children's products using Beautiful Soup (Python) and SQL. Spearheading market research and analysis to produce company's central AI service."
      />

      <ExpCard 
      expC = "Center for Interacting Urban Networks, NYUAD"
      expT = "Research Assistant for Data Visualization Dashboard"
      expD = "Oct. 2021 - July 2022"
      expS = "Conceptualize and developed a responsive dashboard to be used with 15+ types of school-wide collected raw data using Javascript, React.js, Syncfusion, HTML/CSS."
      />

      <ExpCard 
      expC = "Software Engineering Inter"
      expT = "humanID - One-Click Anonymous Sign On"
      expD = "Jan. 2022 - May 20222"
      expS = "Led extensive research to solve reoccurring bug within Android SDK to allow autofill login, optimizing SDK's overall performance and efficiency. {'\n'} Modified Web Login demo using HTML, CSS, Javascript, and PHP to reduce misleading demonstrations and boost attraction to company product."
      />

      <ExpCard 
      expC = "Product Management Intern"
      expT = "humanID - One-Click Anonymous Sign On"
      expD = "Feb. 2021 - Jul. 2021"
      expS = "Lead project of migrating website to AWS Server and removing unnecessary CSS, leading to significant site stability. {'\n'} Spearheaded, successfully completed creation/documentation updates for 2 new SDKs, fulfilling organization's largest sales resource needs. {'\n'} Managed and mentored 5-6 engineers, while orchestrating communication and daily meetings across 5 global timezones"
      />

      <a href='./MinJieKim_resume.pdf' className="resume">view my resume</a>
    </div>
    </div>

  )
}

export default Experience