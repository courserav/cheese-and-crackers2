import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
    margin: '50px',
    color: 'black',
    background: 'white'
}

class Navbar extends React.Component{
    render(){
        return(
            <>
                <NavLink to='/' exact style={style}>Home</NavLink>
                <NavLink to='/about' exact style={style}>About</NavLink>
                <NavLink to='/game' exact style={style}>Game</NavLink>
                <NavLink to='/howto' exact style={style}>How To Play</NavLink>
            </>
        )
    }
}

export default Navbar