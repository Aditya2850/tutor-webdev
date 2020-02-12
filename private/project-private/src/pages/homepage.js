import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../components/button'

const Homepage = () => {
    return(
        <div>
            <Link to='/login'><Button anjir='danger' label='goto' /></Link>
        </div>
    )
}

export default Homepage