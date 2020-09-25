import React from 'react'

class ConfirmBox extends React.Component{
    render(){

        const styleBackground = {
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            justifyContent: "center",
            alignItems: "center"
        }

        const styleBox = {
            position: "relative",
            //width: "200px",
            //height: "200px",
            padding: "1em 1em 1em 1em",
            backgroundColor: "white"
        }

        const styleText = {
            paddingBottom: "1em"
        }

        const styleButton = {
            position: "absolute",
            bottom: "1em",
        }

        const styleButtonLeft = {
            ...styleButton,
            left: "1em"
        }

        const styleButtonRight = {
            ...styleButton,
            right: "1em"
        }

        return(
            <div style={styleBackground} className="confirmbox-background">
                <div style={styleBox} className="confirmbox-box">
                    <p style={styleText}>{this.props.text}</p>
                    <button style={styleButtonLeft} className="confirmbox-button" onClick={() => {this.props.yesHandler()}}>Tak</button>
                    <button style={styleButtonRight} className="confirmbox-button" onClick={() => {this.props.noHandler()} }>Nie</button>
                </div>
            </div>
        )
    }
}

export default ConfirmBox;