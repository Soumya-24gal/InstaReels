import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Login.css'
import {useEffect} from 'react'
import { useContext } from 'react';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import insta from '../assets/Instagram_logo.svg.png'
import {Link} from 'react-router-dom'
import mobile from '../assets/phone.jpg'
import { AuthContext } from '../context/Authcontext';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
// import { makeStyles} from '@mui/styles'
export default function Login() {
  const store = useContext(AuthContext)
  console.log(store)
  const[email,setEmail]=useState()
  const[password,SetPassword]=useState()
  const [name,SetName]=useState()
  const[error,SetError]=useState('')
  const [file,setFile]=useState(null)
  const[loading,setLoading]=useState(false)
  const history = useNavigate()   // Usehistory is replaced by UseNavigate
  const {login}=useContext(AuthContext)
  const handleClick= async()=>{
   
    try{
      SetError('');
      setLoading(true)
      let res=  await login(email,password)
      setLoading(false)
      history('/');
     
    }catch(err){
      SetError(err)
      setTimeout(() => {
        SetError('')
      }, 2000)

    }
  }








  return (
      <div className='LoginWrapper'>
        <div className="slider" style={{ backgroundImage :'url('+mobile+')' , backgroundSize:'cover'}} >
          <div className="phone"> 
                
          </div>

        </div>
      <div className='LoginClass'>  
    <Card sx={{ maxWidth: 410 }}>
      <div className='instaLogo'>
        <img src={insta} alt='' style={{ width:'230px' }}></img>
      </div>
      <CardContent>
        {/* {true && <Alert severity="error">This is an error alert — check it out!</Alert>} */}
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e) => SetPassword(e.target.value) }/>

      </CardContent>
      <CardActions>

        <Button size="small"  fullWidth={true} variant='contained' disabled={loading} onClick={handleClick}>Login</Button>
      </CardActions>
      <CardContent>
       
        
        </CardContent>
        
    
    </Card>
    <Card variant="outlined" sx={{ maxWidth: 410 }}>
     <CardContent>
         <Typography variant="subtitle1">
              Don't have an account? <Link to="/signup">Sign Up</Link>
         </Typography>
    </CardContent>
    </Card>




    </div>
    </div>
  );
}
