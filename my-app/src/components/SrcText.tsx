import React from 'react';
import '../App.css';

interface InternalText {
    Text : string[]
}

export class SrcText extends React.Component<{}, InternalText>{

    constructor(){
        super({});
        this.state = { Text: [""] };
        this.HandleChange = this.HandleChange.bind(this);
    }

    HandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let a : string = event.target.value;
        let lines : string[] = a.split("\n");
        this.setState({ Text: lines });
    }

    render(){
        return(
        <textarea id="MySourceText" 
            value = {
                this.state.Text.reduce( (s0, sn) => s0.concat("\n", sn))
            }
            onChange = {this.HandleChange}
            rows={20}
            cols={80}
        >
        </textarea>
        )};
    }


