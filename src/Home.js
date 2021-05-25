import React, { Component } from 'react'
import fire from './fire'

export default class Home extends Component {

   logout(){
       fire.auth().signOut();
   }

    render() {
        return (
            <div>
               <h1>you are logged in !</h1>
               <button onClick={this.logout}>logout</button> 
            </div>
        )
    }
}
