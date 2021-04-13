import React from 'react'
import {Link} from 'react-router-dom'
function Header( )
{
    return(
    <header style={headerStyle}>
        <h1>Todos App</h1>

<Link to="/">Home</Link>|<Link to="/About">About</Link>|

    </header>
    )
    ;
}
const headerStyle={
    textAlign: 'center',
    background: 'black',
    color: 'yellow',
    padding: '20px'

}
 export  default Header;