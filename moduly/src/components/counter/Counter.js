import React from 'react'

class Counter extends React.Component{
    
    state = {
        value: this.props.value ? this.props.value : 0
    }

    render(){
        
        const styleNumericInput = {
            display: "flex",  
            alignItems: "center"
        }

        const styleInput = {
            width: "100px",
            height:  "38px",
            fontSize: "1.5em",
            fontWeight: "500",
            textAlign: "center"
        }

        const styleCircle = {
            width: "40px",
            height: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "linear-gradient(90deg, lightskyblue 0%, aliceblue 90%, white 100%)"       
         }

         const styleSquare = {
            width: "40px",
            height: "40px",
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
                <input type="text" onChange={this.handleOnChange.bind(this)} value={this.value()} style={styleInput} />
                <span onClick={this.add.bind(this)} style={styleSquare}>+</span>
                <span onClick={this.subtract.bind(this)} style={styleSquare}>-</span>
            </div>
        )
    }

    handleOnChange(e) {
        let result = e.target.value
        result = result.replace(/\D/g, '');
        result = Number(result);
        this.changeHandler(result);
    }

    add() {
        if (this.props.maxValue === undefined || this.value() < this.props.maxValue) {
            let value = this.value() + 1
            this.changeHandler(value);
        }
    }

    subtract(){
        if(this.props.minValue === undefined || this.value() > this.props.minValue){
            let value = this.value() - 1
            this.changeHandler(value);
        }
    }

    changeHandler(value){
        if(this.props.changeHander)
            this.props.changeHander(value);
        else
            this.setState({
                value: value
            })
    }

    value(){
        return this.props.changeHandler ? this.props.value : this.state.value;
    }
}

export default Counter