import * as React from 'react';
import { useState,useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
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
import {Link,useNavigate} from 'react-router-dom'
import { database,storage } from '../firebase';
// import { makeStyles} from '@mui/styles'
export default function Signup() {
 
 
 
 
  const[email,setEmail]=useState()
  const[password,SetPassword]=useState()
  const [name,SetName]=useState()
  const[error,SetError]=useState('')
  const [file,setFile]=useState(null)
  const[loading,setLoading]=useState(false)
  const history = useNavigate()   // Usehistory is replaced by UseNavigate
  const {signup}=useContext(AuthContext)

  const handleClick= async()=>{
    if(file==null){
      SetError('Please upload profile image first')
      setTimeout(() => {
        SetError('')
      }, 2000)
      return ;
    }
    try{
      SetError('');
      setLoading(true)
      let userObj =  await signup(email,password)
      let uid= userObj.user.uid
      console.log(uid)
      const uploadTask=storage.ref(`/users/${uid}/ProfileImage`).put(file)
      uploadTask.on('state_changed',fn1,fn2,fn3)
      function fn1(snapshot){
        let progress= (snapshot.bytesTransferred/snapshot.totalBytes)*100
        console.log(progress)
        console.log(`Upload progress ${progress}`)

      }
      function fn2(error){
        SetError(error)
      setTimeout(() => {
        SetError('')
      }, 2000);
      setLoading(false)
      console.log(error)
      return ;
      
      }
      function fn3(){
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
          console.log(url)
          database.users.doc(uid).set({
            email:email,
            userId:uid,
            fullname:name,
            profileURL:url,
            createdAt:database.getTimeStamp()

          })
        })
        setLoading(false)
        history('/') // not history.push('path')
      }

    }catch(err){
      SetError(err)
      setTimeout(() => {
        SetError('')
      }, 2000)

    }
  }
  
  return (
      <div className='signWrapper'>
      <div className='signClass'>  
    <Card sx={{ maxWidth: 410 }}>
      <div className='instaLogo'>
        <img src={insta} alt='' style={{ width:'230px' }}></img>
      </div>
      <CardContent>
        <Typography  >
          <div className="stext">
         Sign up to see photos and videos from your friends
          </div>
          
        </Typography>
        {error!='' && <Alert severity="error">{error}</Alert>}
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"value={password} onChange={(e) => SetPassword(e.target.value) } />
        <TextField id="outlined-basic" label="Fullname" variant="outlined" fullWidth={true} margin="dense" size="small" value={name} onChange={(e)=> SetName(e.target.value)}/>
        <Button size="small" variant='outlined' fullWidth={true} component="label"> <span className='btnspn'><i className="fa fa-cloud-upload" aria-hidden="true" style={{margin:'2px',padding:'2px'}}></i>Upload Profile Image <input type ="file" accept='image/*' hidden onChange={(e) => setFile(e.target.files[0])}></input></span></Button>
         {/* add component = label and hidden  hide and continue fnctioning of input  */}
      </CardContent>
      <CardActions>

        <Button size="small"  fullWidth={true} variant='contained' disabled={loading} onClick={handleClick}>Sign Up</Button>
      </CardActions>
      <CardContent>
        <Typography variant='subtitle1' >
          <div className="stext">
         By Signing up , you agree to our terms,conditions and cookie policy
          </div>
          
        </Typography>
        
        </CardContent>
        
    
    </Card>
    <Card variant="outlined" sx={{ maxWidth: 410 }}>
     <CardContent>
         <Typography variant="subtitle1">
              Having an account? <Link to="/login">Login </Link>
         </Typography>
    </CardContent>
    </Card>




    </div>
    </div>
  );
}
