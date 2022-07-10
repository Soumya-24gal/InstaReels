import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Signup.css'
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import insta from '../assets/Instagram_logo.svg.png'
// import { makeStyles} from '@mui/styles'
export default function Signup() {
  
  return (
      <div className='signWrapper'>
      <div className='signClass'>  
    <Card sx={{ maxWidth: 345 }}>
      <div className='instaLogo'>
        <img src={insta} alt='' style={{ width:'230px' }}></img>
      </div>
      <CardContent>
        <Typography  >
          <div className="stext">
         Sign up to see photos and videos from your friends
          </div>
          
        </Typography>
        {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"/>
        <TextField id="outlined-basic" label="Fullname" variant="outlined" fullWidth={true} margin="dense" size="small"/>
        <Button size="small" variant='outlined' fullWidth={true} component="label"> <span className='btnspn'><i class="fa fa-cloud-upload" aria-hidden="true" style={{margin:'2px',padding:'2px'}}></i>Upload Profile Image <input type ="file" accept='image/*' hidden></input></span></Button>
          {/* add component = label and hidden to hide and continue fnctioning of input */}
      </CardContent>
      <CardActions>

        <Button size="medium"  fullWidth={true} variant='contained'>Sign Up</Button>
      </CardActions>
      <CardContent>
        <Typography  >
          <div className="stext">
         By Signing up , you accept terms and conditions
          </div>
          
        </Typography>
        
        </CardContent>
        
    
    </Card>
    </div>
    </div>
  );
}
