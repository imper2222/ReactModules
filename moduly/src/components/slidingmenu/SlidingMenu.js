import React from 'react'

class SlidingMenu extends React.Component{
    render(){
        const styleMenu = {
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            opacity: 0.8,
            transition: "transform .8s ease"
        }

        const styleMenuVisible = {
            ...styleMenu,
            transform: "translate3d(0vw, 0, 0)"
        }

        const styleMenuHide = {
            ...styleMenu,
            transform: "translate3d(-100vw, 0, 0)"
        }

        return(
            <div style={this.props.visible ? styleMenuVisible : styleMenuHide} onClick={this.props.toggleMenu}>
                {this.props.children}
            </div>
        )
    }
}

export default SlidingMenu