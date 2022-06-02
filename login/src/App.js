import './App.css';
import React from 'react';
import {FormControlLabel, Grid , Paper, Avatar,TextField,Checkbox, Button, Typography, Link} from '@material-ui/core'


function App() {


  const paperStyle={padding : 20 , height:'50vh', width:320, margin:"40px auto",backgroundColor:"#F0F8FF"}
  const avatarStyle={backgroundColor:'#08143D',height:'7vh', width:60}
  const buttonstyle={margin:'10px 0', backgroundColor:"#08143D"}
  return(

      <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align ='center'>
              <h3 style={{ color: 'black' }}> PiggyBanc </h3>
              <h2> Login </h2>
              </Grid>

              <TextField label ="Username" placeholder=' Enter Username' fullWidth required/>
              <TextField label ="Password" placeholder=' Enter Password' fullWidth required/>
              <FormControlLabel
                  control ={
                      <Checkbox
                      name ="checkedB"
                      color="primary"
                      />
                  }
                  label = "Remember me ?"
              />
              <Button type="submit" color="Primary" style={buttonstyle} variant="contained" fullWidth> Login </Button>
              <Typography>
                  <Link href ="#">
                      Forgot Password?
                  </Link>
              </Typography>
               </Paper>
           </Grid>
  )
}

export default App;
