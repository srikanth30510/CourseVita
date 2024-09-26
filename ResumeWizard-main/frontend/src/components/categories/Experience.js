import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, TextField, Grid, Fab } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { updateExperienceInfo } from "../actions/categoryAction";
import stand from "./stand.jpg"
const Experience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const experienceInfo = useSelector(state => state.category.experience.experienceInfo);

  const [experience, setExperience] = useState([experienceInfo]);

  const handleAdd = () => {
    setExperience(prev=>[...prev, {
      positionTitle: '',
      companyName: '',
      startDate: null,
      endDate: null,
      description: ''
    }]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setExperience(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails[index] = {
        ...newDetails[index],
        [name]: value
      };
      return newDetails;
    })
  };

  const handleDateChange = (index, date, field) => {
    setExperience(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails[index] = {
        ...newDetails[index],
        [field]: date
      };
      return newDetails;
    });
  };

  const handleDelete = (index) => {
    setExperience(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails.splice(index, 1);
      return newDetails;
    });
  };
  
  const handleClick = () => {
    const serializedDetails = experience.map(detail => ({
      ...detail,
      startDate: detail.startDate ? detail.startDate.toISOString().substring(0, 10): null,
      endDate: detail.endDate ? detail.endDate.toISOString().substring(0, 10): null
    }));
    dispatch(updateExperienceInfo(serializedDetails));
    navigate("/skills");
    
  };

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
          Experience
        </Typography>
        {experience.map((experiences, index) => (
          <Box key={index} component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="positionTitle"
                  label="Position title"
                  value={experiences.positionTitle}
                  onChange={(event) => handleChange(index, event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="companyName"
                  label="Company name"
                  value={experiences.companyName}
                  onChange={(event) => handleChange(index, event)}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Start Date"
                    inputFormat="MM/DD/YYYY"
                    name="startDate"
                    value={experiences.startDate}
                    onChange={(date) => handleDateChange(index, date, 'startDate')}
                    textField={(params) => (
                      <TextField sx={{ marginRight: 5 }} size="small" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="End Date"
                    name="endDate"
                    inputFormat="MM/DD/YYYY"
                    value={experiences.endDate}
                    onChange={(date) => handleDateChange(index, date, 'endDate')}
                    textField={(params) => (
                      <TextField sx={{ marginRight: 5 }} size="small" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  multiline
                  rows={2}
                  name="description"
                  label="Description"
                  value={experiences.description}
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
              <Button variant="contained" onClick={handleClick} sx={{marginLeft:"1.5em"}}>Next</Button>
            </Grid>
          </Grid>
      </Box>
    </Container>
    </>
  );
};

export default Experience;
