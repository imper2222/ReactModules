import React from 'react'

class SlidingMenuButton extends React.Component{
    state = {
        hover: false
    }
    
    render() {

        const styleHamburger = {
            width: "50px",
            transition: "all .5s"
        }

        const styleHamburgerHover = {
            ...styleHamburger,
            opacity: 0.5,
            transform: "scale(1.05)"
        }

        const styleHamburgerBand = { 
            backgroundColor: "black",
            width: "50px",
            height: "5px",
            margin: "9px 0"
        }       

        return(
            <div style={this.state.hover ? styleHamburgerHover : styleHamburger} onClick={this.props.toggleMenu} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div style={styleHamburgerBand}></div>
                <div style={styleHamburgerBand}></div>
                <div style={styleHamburgerBand}></div>
            </div>
        )
    }

    handleMouseEnter = () => {
        this.setState({ hover: true })
    }
    
    handleMouseLeave = () => {
        this.setState({ hover: false })
    }
}

export default SlidingMenuButton