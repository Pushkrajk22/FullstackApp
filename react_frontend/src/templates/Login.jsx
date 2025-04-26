import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from 'react-router-dom';



export default function Users() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {   event.preventDefault();    };
    const handleMouseUpPassword = (event) => {   event.preventDefault();    };
    const navigate = useNavigate();

        const [users, setUsers] = useState([]);
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        // const [showUsers, setShowUsers] = useState(false);
    
        const loginUser = async () => {
            try {
                if (name.trim() !== '' && password.trim() !== '') {
                    const response = await axios.post('http://localhost:8000/api/login/', {
                        name: name,
                        password: password,
                    });
        
                    if (response.status === 200) {
                        alert('Login successful!');
                        setName('');
                        setPassword('');
                        navigate('/hello');
                    }
                } else {
                    alert('Please enter both name and password.');
                }
            } catch (error) {
                if (error.response) {
                    // Server responded with a status other than 2xx
                    console.log('Login failed:', error.response.data);
                    alert(error.response.data.error || 'Login failed. Check credentials.');
                } else {
                    // Network or other error
                    console.log('Error connecting to server:', error.message);
                    alert('Could not connect to the server.');
                }
            }
        };
        
    return (

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg?ga=GA1.1.1706700643.1741121389&semt=ais_hybrid&w=740)',
                height: '90vh', border: '3px solid #000000', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
            }}
            noValidate
            autoComplete="on"
        >

            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: 'black', textShadow: '4px 4px 8px rgba(0,0,0,0.3)' }}>
                LOGIN
            </Typography>

            <TextField id="outlined-basic" label="Username" variant="outlined" size="small" value={name} onChange={(e) => setName(e.target.value)} />

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" size="small">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="password"
                />
            </FormControl>

            <Box sx={{ width: '15ch' }}>
                <Button variant="contained" fullWidth onClick={loginUser}>
                    LOGIN
                </Button>
            </Box>

            <div>Forgot <a href='google.com'>Password</a>?</div>
            <div>Don't have an account? <Link to="/signup">Sign-up</Link></div>

        </Box>
    );
}
