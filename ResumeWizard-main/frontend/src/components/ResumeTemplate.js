import React from "react";
import "./ResumeTemplate.css";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const ResumeTemplate = React.forwardRef(({ data }, ref) =>{
  
    return (
      <div className="resume" ref={ref}>
        
        <div className="header">
          <h1>{data.personal.firstName} {data.personal.lastName}</h1>
          <h4><span className="h"> <PhoneEnabledIcon/>(+91){data.personal.phoneNumber}</span>  <span className="h"> <EmailIcon />{data.personal.email} </span>
         <span className="h"> <LinkedInIcon /> <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> </span>
          <span className="h"> <GitHubIcon /> <a href={data.personal.github} target="_blank" rel="noopener noreferrer">Github</a> </span>
          </h4>
        </div>
        <div className="education">
          <h2>Education</h2>
          <hr />
          {data.education.map((edu, index) => (
            <div key={index} >
              <h3>{edu.college}  <span style={{fontSize:"15px",fontWeight:"normal"}} className="d">({edu.startDate} -{edu.endDate} )</span></h3>
              <p>{edu.degree} - GPA: {edu.gpa}</p>
             
            </div>
          ))}
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <hr />
          {data.experience.map((exp, index) => (
            <div key={index}>
              <h3>{exp.companyName}</h3>
              <p>{exp.positionTitle} <span className="d"> ({exp.startDate} - {exp.endDate}) </span></p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <hr />
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill.skills}</li>
            ))}
          </ul>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <hr />
          <ul>
          {data.projects.map((project, index) => (
            <li key={index}>
              <h3>{project.projectTitle} {<a className="d" href={project.projectLink} target="_blank" rel="noopener noreferrer">project link</a>}</h3>
              <p>{project.description}</p>
              
            </li>
          ))}
          </ul>
        </div>
        <div className="certificates">
          <h2>Certificates</h2>
          <hr />
          {data.certificates.map((certificate, index) => (
            <div key={index} className="cdata">
              <p>{certificate.certificateName}</p>
              <a href={certificate.certificateLink} target="_blank" rel="noopener noreferrer">certificate link</a>
            </div>
          ))}
        </div>
        <div className="achievements">
          <h2>Achievements</h2>
          <hr />
            {data.achievements.map((achievement, index) => (
               <div key={index} className="adata">
               <p>{achievement.award}</p>
               <a href={achievement.achievementLink} target="_blank" rel="noopener noreferrer">View</a>
            
             </div>
            ))}  
        </div>
       
      </div> 
      
      
    );
  });
  export default ResumeTemplate;