import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateEducationInfo } from '../actions/categoryAction';
import stand from "./stand.jpg"
export default function Education() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const educationInfo = useSelector(state => state.category.education.educationInfo);
  const [educationalDetails, setEducationalDetails] = useState([educationInfo]);

  const handleAddDetail = () => {
    setEducationalDetails(prevDetails => [...prevDetails, {
      college: '',
      degree: '',
      startDate:null,
      endDate: null,
      gpa: ''
    }]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setEducationalDetails(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails[index] = {
        ...newDetails[index],
        [name]: value
      };
      return newDetails;
    });
  };

  const handleDateChange = (index, date, field) => {
    setEducationalDetails(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails[index] = {
        ...newDetails[index],
        [field]: date
      };
      return newDetails;
    });
  };

  const handleDeleteDetail = (index) => {
    setEducationalDetails(prevDetails => {
      const newDetails = [...prevDetails];
      newDetails.splice(index, 1);
      return newDetails;
    });
  };

  const handleClick = () => {
    const serializedDetails = educationalDetails.map(detail => ({
      ...detail,
      startDate: detail.startDate ? detail.startDate.toISOString().substring(0, 4): null,
      endDate: detail.endDate ? detail.endDate.toISOString().substring(0, 4) : null
    }));
    dispatch(updateEducationInfo(serializedDetails));
    navigate("/experience");
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
          Educational Details
        </Typography>
        {educationalDetails.map((detail, index) => (
          <Box component="form" key={index} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="college"
                  label="College"
                  value={detail.college}
                  onChange={(event) => handleChange(index, event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="degree"
                  label="Degree"
                  value={detail.degree}
                  onChange={(event) => handleChange(index, event)}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Start Year"
                    views={['year']}
                    name="startDate"
                    value={detail.startDate}
                    onChange={(date) => handleDateChange(index, date, 'startDate')}
                    textField={(params) => (
                      <TextField sx={{ marginRight: 5 }} size="small" {...params}  />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="End Year"
                    views={['year']}
                    value={detail.endDate}
                    onChange={(date) => handleDateChange(index, date, 'endDate')}
                    name="endDate"
                    textField={(params) => (
                      <TextField sx={{ marginRight: 5 }} size="small" {...params}/>
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="gpa"
                  label="Gpa"
                  value={detail.gpa}
                  onChange={(event) => handleChange(index, event)}
                />
              </Grid>
              <Grid item xs={12}>
                <DeleteIcon onClick={() => handleDeleteDetail(index)} />
              </Grid>
            </Grid>
          </Box>
        ))}
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <Fab size="medium" color="secondary" aria-label="add" onClick={handleAddDetail}>
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
}
