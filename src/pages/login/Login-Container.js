import React from 'react';

export const LoginContainer = (props) => { 

    return (<div className="App">
                <form className="form-signin">   
                {props.children}
                    
                </form>
            </div> 
    );
}

