import React from 'react'
import SlidingMenuButton from './SlidingMenuButton'
import SlidingMenu from './SlidingMenu'

class SlidingMenuContainer extends React.Component{
    state = {
        visible: false
    }

    render(){
        return(
            <div>
                <SlidingMenuButton toggleMenu={this.toggleMenu.bind(this)} />
                <SlidingMenu visible={this.state.visible} toggleMenu={this.toggleMenu.bind(this)}>
                {this.props.children}
                </SlidingMenu>
            </div>
        )
    }

    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        })
    }
}

export default SlidingMenuContainer