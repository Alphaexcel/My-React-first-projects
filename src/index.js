import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'
import './House'
import './Page'
import axios from 'axios';

const Project = () =>  (
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

axios.get(`http://www.reddit.com/r/reactjs.json`)
    .then(response => {
        const posts = response.data.data.children.map(
            obj => obj.data
        );
        console.log(posts);
    })

      .catch(error => {
          console.error(error);
      })

      fetch(`http://www.reddit.com/r/reactjs.json`)
      .then(response => {
          if(response.ok) {
              return response.json();
          }
          throw new Error('Request failed');
      })
      .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new MessageEvent('Loading....')
      })
      .then(res => {
          const posts = res.data.data.children.map(
              obj => obj.data
          );
          console.log(posts);
      })
      .catch(error => {
          console.error(error);
      });

      class Reddit extends React.Component {
          state ={
              posts:[]
          };

          componentDidMount() {
              axios 
              .get(
                  `http://www.reddit.com/r/${
                      this.props.subreddit
                  }.json`
              )
              .then(res => {
                  const posts = res.data.data.children.map(
                      obj => obj.data
                  );
                  this.setState({ posts});
              });
                
          }

           
        
        render() {
            const {posts} = this.state;
            return(
                <div>
                <h1>{`/loading.../${this.props.subreddit}`}</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
                </div>
            
            );
        }
      }
        
  

ReactDOM.render(<Project/>, document.querySelector('#root'));