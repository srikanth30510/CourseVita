

import { combineReducers } from 'redux';
import { UPDATE_PERSONAL_INFO, UPDATE_EDUCATION_INFO, UPDATE_EXPERIENCE_INFO, UPDATE_SKILLS_INFO, UPDATE_PROJECTS_INFO, UPDATE_CERTIFICATES_INFO, UPDATE_ACHIEVEMENTS_INFO,ALL_FORMS_FILLED } from '../actions/categoryAction';

// Personal Reducer
const initialPersonalState = {
  personalInfo: {},
};

const personalReducer = (state = initialPersonalState, action) => {
  switch (action.type) {
    case UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: action.payload,
      };
    default:
      return state;
  }
};

// Education Reducer
const initialEducationState = {
  educationInfo: {
    college: '',
    degree: '',
    startDate: null,
    endDate: null,
    gpa: ''
  },
};

const educationReducer = (state = initialEducationState, action) => {
  switch (action.type) {
    case UPDATE_EDUCATION_INFO:
      return {
        ...state,
        educationInfo: action.payload,
      };
    default:
      return state;
  }
};

// Experience Reducer
const initialExperienceState = {
  experienceInfo: {
    positionTitle: '',
      companyName: '',
      startDate: null,
      endDate: null,
      description: ''
  },
};

const experienceReducer = (state = initialExperienceState, action) => {
  switch (action.type) {
    case UPDATE_EXPERIENCE_INFO:
      return {
        ...state,
        experienceInfo: action.payload,
      };
    default:
      return state;
  }
};

// Skills Reducer
const initialSkillsState = {
  skillsInfo: {},
};

const skillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case UPDATE_SKILLS_INFO:
      return {
        ...state,
        skillsInfo: action.payload,
      };
    default:
      return state;
  }
};

// Projects Reducer
const initialProjectsState = {
  projectsInfo: {
      projectTitle: '',
      projectLink: '',
      description: ''
    }
};

const projectsReducer = (state = initialProjectsState, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS_INFO:
      return {
        ...state,
        projectsInfo: action.payload,
      };
    default:
      return state;
  }
};

// Certificates Reducer
const initialCertificatesState = {
  certificatesInfo: {
    certificateName: '',
    certificateLink: ''
  },
};

const certificatesReducer = (state = initialCertificatesState, action) => {
  switch (action.type) {
    case UPDATE_CERTIFICATES_INFO:
      return {
        ...state,
        certificatesInfo: action.payload,
      };
    default:
      return state;
  }
};

// Achievements Reducer
const initialAchievementsState = {
  achievementsInfo: {
    award: '',
    achievementLink: ''
  },
};

const achievementsReducer = (state = initialAchievementsState, action) => {
  switch (action.type) {
    case UPDATE_ACHIEVEMENTS_INFO:
      return {
        ...state,
        achievementsInfo: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  allFormsFilled: false, 
};
const submitReducer=(state=initialState,action)=>{
  switch (action.type) {
    case ALL_FORMS_FILLED:
      return {
        ...state,
        allFormsFilled: true,
      };
    default:
      return state;
  }
}
const categoryReducers = combineReducers({
  personal: personalReducer,
  education: educationReducer,
  experience: experienceReducer,
  skills: skillsReducer,
  projects: projectsReducer,
  certificates: certificatesReducer,
  achievements: achievementsReducer,
  submit: submitReducer,
});

export default categoryReducers;

