import React, { useState } from "react";
import { Container, Typography, TextField, Grid, Box, Fab } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateAchievementsInfo } from '../actions/categoryAction';
import { allFormsFilled } from '../actions/categoryAction';
import stand from "./stand.jpg"
const Achievements = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const achievementsInfo = useSelector(state => state.category.achievements.achievementsInfo);
  const [achievements, setAchievements] = useState([achievementsInfo]);

  const handleAdd= () => {
    setAchievements(prev=>[...prev, {
      award: '',
      achievementLink: ''
    }]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setAchievements(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails[index] = {
        ...newDetails[index],
        [name]: value
      };
      return newDetails;
    });
  };

  const handleDelete = (index) => {
    setAchievements(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails.splice(index, 1);
      return newDetails;
    });
  };
  const handleClick=()=>{
    dispatch(updateAchievementsInfo(achievements));
    dispatch(allFormsFilled());
    navigate("/resume")
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
          Achievements
        </Typography>
        {achievements.map((achievement, index) => (
          <Box key={index} component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="award"
                  label="Add Achievements"
                  value={achievement.award}
                  onChange={(event) => handleChange(index, event)}
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="achievementLink"
                  label="Achievement Link"
                  value={achievement.achievementLink}
                  required
                  onChange={(event) => handleChange(index, event)}
                />
              </Grid>
              <Grid item xs={12}>
                <DeleteIcon onClick={() => handleDelete(index)} />
              </Grid>
            </Grid>
          </Box>
        ))}
         <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <Fab size="medium" color="secondary" aria-label="add" onClick={handleAdd}>
                <AddIcon />
              </Fab>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleClick} sx={{marginLeft:"1.5em"}}>Submit</Button>
            </Grid>
          </Grid>
      </Box>
    </Container>
    </>
  );
};

export default Achievements;
