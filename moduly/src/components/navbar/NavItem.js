import React from 'react'

class NavbarItem extends React.Component{
    render(){
        return(
            <li className="nav-item">
                <a href="#" className="icon-button">
                    {this.props.icon}
                </a>
            </li>
        )
    }

}

export default NavbarItem