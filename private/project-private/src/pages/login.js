import React from 'react'
import {Link} from 'react-router-dom'
import Loginform from '../components/loginform'
import Button from '../components/button'

const Login = () => {
    return (
        <div>
            <Loginform />
            <Link to ='/'><Button anjir='warning' label='gotohomepage' icons='window-close'/></Link>
        </div>
    )

}

export default Login