import React from 'react';


interface IYoProps {
    inputName: string;    
    input: string;
    handler: any;
  }

  interface IState {    
    input: string;
}

class InputBoxPlaceholder extends React.Component<IYoProps, IState> {    


    constructor(private props2: IYoProps) {
        super(props2);
        this.state = {
            input : this.props.input

        }
        
    }
    
    public getInputElement(inputName: string): JSX.Element {

        

        return (
            <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"/* requiredTxt="" autofocus=""*//>            
          </div>
        )
    }

    onTodoChange(value: string){

        this.setState({
             input: value
        });               
        this.props.handler(value);
        
    }
    

    render(): JSX.Element {
        return (
            <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder={this.props2.inputName}/* requiredTxt="" autofocus=""*/ value={this.state.input}
            
            onChange={(e) => {this.onTodoChange( e.target.value)}}
            />            
          </div>
        )
    }
}

export default InputBoxPlaceholder;