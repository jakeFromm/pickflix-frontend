import React from 'react';
import "./LogIn.css"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { white } from '@material-ui/core/colors';

export default function LogIn() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

return (
    <div>

        <form noValidate autoComplete="off">
            
            <FormControl variant="outlined">
                <TextField
                    id="outlined-secondary"
                    label="Email Address"
                    variant="outlined"
                    color='white'
                />
            </FormControl>

            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    // onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl>

            <FormControl variant="outlined">
                <TextField
                    id="outlined-secondary"
                    label="Name"
                    variant="outlined"
                    color="white"
                />
            </FormControl>

            <FormControl variant="outlined">
                <TextField
                    id="outlined-secondary"
                    label="Image"
                    variant="outlined"
                    color="white"
                />
            </FormControl>

            
        </form>
    </div>
    );
    }