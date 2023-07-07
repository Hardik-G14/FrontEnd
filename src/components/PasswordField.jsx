import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import React from 'react'

const PasswordField = ({ setPass, passwordState, placeholder }) => {
    return (
        <div className='flex'>
            <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder={placeholder} type={passwordState ? "password" : "text"} />
            <IconButton sx={{ width: "60px" }} onClick={() => {
                setPass(prevState => !prevState)
            }
            }>
                {passwordState ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
        </div>
    )
}

export default PasswordField;