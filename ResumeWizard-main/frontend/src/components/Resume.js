import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import ResumeTemplate from "./ResumeTemplate";
import Button from '@mui/material/Button';
const Resume = () => {
  const personalInfo = useSelector((state) => state.category.personal.personalInfo);
  const educationInfo = useSelector((state) => state.category.education.educationInfo);
  const experienceInfo = useSelector((state) => state.category.experience.experienceInfo);
  const skillsInfo = useSelector((state) => state.category.skills.skillsInfo);
  const projectsInfo = useSelector((state) => state.category.projects.projectsInfo);
  const certificatesInfo = useSelector((state) => state.category.certificates.certificatesInfo);
  const achievementsInfo = useSelector((state) => state.category.achievements.achievementsInfo);
  const educationArray = Array.isArray(educationInfo) ? educationInfo : [educationInfo];
  const experienceArray = Array.isArray(experienceInfo) ? experienceInfo : [experienceInfo];
  const resumeRef = useRef();

  const data = {
    personal: personalInfo,
    education: educationArray,
    experience: experienceArray,
    skills: Object.values(skillsInfo),
    projects: Object.values(projectsInfo),
    certificates: Object.values(certificatesInfo),
    achievements: Object.values(achievementsInfo),
  };

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div>
      <div>
      <Button variant="contained" onClick={handlePrint} style={{margin:"2em 40em",} }>DOWNLOAD</Button>
      </div>
      <ResumeTemplate ref={resumeRef} data={data} />
    </div>
  );
};

export default Resume;