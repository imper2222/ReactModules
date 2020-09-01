import React from 'react'

class VoiceReader extends React.Component{
    
    render(){
        return(
            <button onClick={this.read.bind(this)}>Czytaj</button>  
        )
    }

    setSpeakerLanguage(){
        
    }

    read(){
        
        const message = new SpeechSynthesisUtterance();
        message.text = this.props.text; //"Hi Jola. Are you hungry? Or we exercices Joga before?";
        window.speechSynthesis.speak(message);
    }
}

export default VoiceReader