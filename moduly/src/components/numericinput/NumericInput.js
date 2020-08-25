import React from 'react'

class NumericInput extends React.Component{
    
    state = {
        value: 0
    }
    
    render(){
        
        const styleNumericInput = {
            display: "flex",  
        }

        const styleInput = {
            fontSize: "1.5em",
            fontWeight: "500"
        }

        const styleCircle = {
            width: "50px",
            height: "50px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "linear-gradient(90deg, lightskyblue 0%, aliceblue 90%, white 100%)"       
         }

         const styleSquare = {
            width: "50px",
            height: "50px",
            fontSize: "1.5em",
            fontWeight: "500",
            marginLeft: "5px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundColor: "black",
            cursor: "pointer",
            userSelect: "none"
         }

        return(
            <div className="numeric-input" style={styleNumericInput}>
                <input type="text" onChange={this.handleOnChange.bind(this)} value={this.state.value} style={styleInput}/>
                <span onClick={this.add.bind(this)} style={styleSquare}>+</span>
                <span onClick={this.subtract.bind(this)} style={styleSquare}>-</span>
            </div>
        )
    }

    handleOnChange(e) {
        let result = e.target.value
        result = result.replace(/\D/g, '');
        result = Number(result);
        this.setState({
            value: result
        })
        this.props.changeHandler(result);
    }

    add(){
        if(this.state.maxValue === undefined || this.state.value < this.props.maxValue){
            this.setState({
                value: this.state.value + 1
            })
        }
    }

    subtract(){
        if(this.state.minValue === undefined || this.state.value > this.props.minValue){
            this.setState({
                value: this.state.value - 1
            })
        }
    }
}

export default NumericInput