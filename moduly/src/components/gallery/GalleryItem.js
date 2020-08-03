import React from 'react'

class GalleryItem extends React.Component {
    state = {
        hover: false
    }

    render() {
        const styleFigure = {
            display: "flex",
            flexDirection: "column",
            margin: 0,
            cursor: "pointer",
            transition: "all 0.5s"
        }

        const styleFigureHover = {
            ...styleFigure,
            opacity: "0.8"
        }

        const styleImage = {
            flexGrow: 1,
            objectFit: "cover",
            maxWidth: "100%",
        }

        return(
        <figure style={this.state.hover ? styleFigureHover : styleFigure} onMouseEnter={this.handleGalleryItemMouseEnter} onMouseLeave={this.handleGalleryItemMouseLeave} onClick={() => { this.props.handlerShowModal(this.props.image)}}>
            <img style={styleImage} src={this.props.image.src}></img>
        </figure>
        )
    }

    handleGalleryItemMouseEnter = () => {
        this.setState({ hover: true })
    }
    
    handleGalleryItemMouseLeave = () => {
        this.setState({ hover: false })
    }
}



export default GalleryItem