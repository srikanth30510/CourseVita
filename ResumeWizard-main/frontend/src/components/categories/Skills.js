import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateSkillsInfo } from '../actions/categoryAction';
import stand from "./stand.jpg"
export default function Skills() {
   const navigate=useNavigate();
   const dispatch = useDispatch();
   const skillsInfo = useSelector(state => state.category.skills.skillsInfo);
   const [skills,setSkills]=useState([skillsInfo]);
    
    const handleSkill=()=>{
      setSkills(prevDetails => [...prevDetails, {}]);
    }
    const handleChange=(index,event)=>{
      const { name, value } = event.target;
       setSkills(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails[index] = {
        ...newDetails[index],
        [name]: value
      };
      return newDetails;
    });
    }
    const handleDelete=(index)=>{
      setSkills(prevDetails => {
        const newDetails = [...prevDetails];
        newDetails.splice(index, 1);
        return newDetails;
      });
    }
    const handleClick=()=>{
      dispatch(updateSkillsInfo(skills));
      navigate("/projects");
    }
    return (
      <>
         <img
      src={stand}
      alt="placeholder"
      style={{float:"left",width:"35em",height:"30em" }}
    />
        <Container component="main" maxWidth="xs" sx={{marginLeft:"40em"}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4" sx={{fontFamily:"serif",color:"#640D6B"}}>
              Skills
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
             {skills.map((detail, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="skills"
                    label="Add skills"
                    name="skills"
                    onChange={(event)=>handleChange(index,event)}
                  />
                  <DeleteIcon fontSize="large" onClick={()=>handleDelete(index)}/>
                </Grid>
                </Grid>
                
             ))}
            <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <Fab size="medium" color="secondary" aria-label="add" onClick={handleSkill}>
                <AddIcon />
              </Fab>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleClick} sx={{marginLeft:"1.5em"}}>Next</Button>
            </Grid>
          </Grid>
           </Box>
          </Box>
        </Container>
        </>
    );
  } 