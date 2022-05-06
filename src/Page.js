import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
const Page = () =>  (
    <div>
        <CountingParent/>

    </div>
);

 function Reset ({ onAction }) {
    return (
    <button type="button" onClick={ onAction} >
        RESET
        </button>
    );
}


Reset.propTypes = {
    onAction : PropTypes.func.isRequired
};



 


export class CountingParent extends  Component {
    constructor(props) {
        super(props);
        // Set the state here . Use "props" if needed.
        this.state = { actionCount : 0} ;
        this.handleAction = this.handleAction.bind(this);

    }

    handleAction = (action) => {
        const { actionCount } = this.state;
        // console.log('Child says', action);
        this.setState ({ actionCount : actionCount + 1});
    };
    resetAction = (action) => {
        // console.log (`reset says `, action.target):
        this.setState({ actionCount : 0});
    };

   render() {
        const {actionCount} = this.state;
        return (
            <div>
                <Child onAction={this.handleAction}/>
                <Reset onAction={this.resetAction}/>
                <p>{`Clicked ${actionCount} times`}</p>
            </div>
        );
   }

   

}
export default function Child ({ onAction }) {
    return <button onClick= { onAction} type= "button">Click !</button>
}