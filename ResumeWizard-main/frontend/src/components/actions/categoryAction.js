

export const UPDATE_PERSONAL_INFO = 'UPDATE_PERSONAL_INFO';
export const UPDATE_EDUCATION_INFO = 'UPDATE_EDUCATION_INFO';
export const UPDATE_EXPERIENCE_INFO = 'UPDATE_EXPERIENCE_INFO';
export const UPDATE_SKILLS_INFO = 'UPDATE_SKILLS_INFO';
export const UPDATE_PROJECTS_INFO = 'UPDATE_PROJECTS_INFO';
export const UPDATE_CERTIFICATES_INFO = 'UPDATE_CERTIFICATES_INFO';
export const UPDATE_ACHIEVEMENTS_INFO = 'UPDATE_ACHIEVEMENTS_INFO';
export const ALL_FORMS_FILLED = 'ALL_FORMS_FILLED';


// Personal Actions

export const updatePersonalInfo = (personalInfo) => {
  return { type: UPDATE_PERSONAL_INFO, payload: personalInfo };
};

// Education Actions

export const updateEducationInfo = (educationInfo) => {
  return { type: UPDATE_EDUCATION_INFO, payload: educationInfo };
};

// Experience Actions

export const updateExperienceInfo = (experienceInfo) => {
  return { type: UPDATE_EXPERIENCE_INFO, payload: experienceInfo };
};

// Skills Actions

export const updateSkillsInfo = (skillsInfo) => {
  return { type: UPDATE_SKILLS_INFO, payload: skillsInfo };
};

// Projects Actions


export const updateProjectsInfo = (projectsInfo) => {
  return { type: UPDATE_PROJECTS_INFO, payload: projectsInfo };
};

// Certificates Actions


export const updateCertificatesInfo = (certificatesInfo) => {
  return { type: UPDATE_CERTIFICATES_INFO, payload: certificatesInfo };
};

// Achievements Actions


export const updateAchievementsInfo = (achievementsInfo) => {
  return { type: UPDATE_ACHIEVEMENTS_INFO, payload: achievementsInfo };
};


export const allFormsFilled = () => {
  return { type: ALL_FORMS_FILLED };
};