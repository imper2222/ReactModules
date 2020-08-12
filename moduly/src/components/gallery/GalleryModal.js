import React from 'react'

class GalleryModal extends React.Component {
    state = {
        leftHover: false,
        rightHover: false,
        closeHover: false
    }

    render() {
        const styleModal = {
            display: "flex",
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            alignItems: "center"
        }

        const styleImage = {
            display: "block",
            position: "absolute",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            width: "80vw",
            height: "80vh",
            objectFit: "contain",

            //animacje
            animationName: "zoom",
            animationDuration: "0.6s"
        }

        const styleCaption = {
            display: "flex",
            position: "absolute",
            bottom: "5vh",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "1.2em",
            fontStyle: "italic",
            color: "white"
        }

        const styleClose = {
            position: "absolute",
            top: 15,
            right: 35,
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s"
        }

        const styleLeft = {
            position: "absolute",
            left: 0,
            zIndex: 2,
            width: "3em",
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.3s"
        }

        const styleRight = {
            position: "absolute",
            right: 0,
            zIndex: 2,
            width: "3em",
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.3s"
        }

        const styleHover = {
            opacity: 0.5,
            transform: "scale(1.1)"
        }

        const animationZoom = "@keyframes zoom {from {transform: scale(0)}to {transform: scale(1)}}"


        return (
            <div style={styleModal}>
                <style children={animationZoom} />
                <img style={styleImage} src={this.props.image.src}></img>
                {
                    this.props.image.caption &&
                    <div style={styleCaption}>{this.props.image.caption}</div>
                }
                {
                    this.props.first != true &&
                    <div style={this.state.leftHover ? { ...styleLeft, ...styleHover } : styleLeft} onClick={this.handleLeftOnClick} onMouseEnter={this.handleLeftOnMouseEnter} onMouseLeave={this.handleLeftOnMouseLeave}>&lt;</div>
                }
                {
                    this.props.last != true &&
                    <div style={this.state.rightHover ? { ...styleRight, ...styleHover } : styleRight} onClick={this.handleRigthOnClick} onMouseEnter={this.handleRightOnMouseEnter} onMouseLeave={this.handleRightOnMouseLeave}>&gt;</div>
                }
                <span style={this.state.closeHover ? { ...styleClose, ...styleHover } : styleClose} onClick={this.handleCloseOnClick} onMouseEnter={this.handleCloseOnMouseEnter} onMouseLeave={this.handleCloseOnMouseLeave}>&times;</span>
            </div>
        )
    }

    handleCloseOnClick = () => {
        this.props.handlerHideModal();
    }

    handleRigthOnClick = () => {
        this.props.handlerNextImage();
    }

    handleLeftOnClick = () => {
        this.props.handlerPreviousImage();
    }

    handleCloseOnMouseEnter = () => {
        this.setState({
            closeHover: true
        })
    }

    handleCloseOnMouseLeave = () => {
        this.setState({
            closeHover: false
        })
    }

    handleLeftOnMouseEnter = () => {
        this.setState({
            leftHover: true
        })
    }

    handleLeftOnMouseLeave = () => {
        this.setState({
            leftHover: false
        })
    }

    handleRightOnMouseEnter = () => {
        this.setState({
            rightHover: true
        })
    }

    handleRightOnMouseLeave = () => {
        this.setState({
            rightHover: false
        })
    }

}

export default GalleryModal