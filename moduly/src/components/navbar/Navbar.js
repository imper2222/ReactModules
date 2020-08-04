import React from 'react'

class Navbar extends React.Component{

    render(){
        const styleNavbar = {
            height: '50px',
            backgroundColor: 'grey',
            color: 'white'
                
        }

        const styleNavbarNav = {
            maxWidth: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
        }


        return(
            <nav className="navbar" style={styleNavbar}>
                <ul className="navbar-nav" style={styleNavbarNav}>
                    {this.props.children}
                </ul>
            </nav>
        )
    }
}

export default Navbar