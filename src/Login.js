import React, { Component } from 'react'
import fire from './fire';

export default class Login extends Component {
    
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
      }


    state={
        email:"",
        password:""
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(u=>console.log("succesfully logged in" )).catch(err=>console.log(err.toString()))
    }
    
    signup(){
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(u=>console.log("succesfully signed up" )).catch(err=>console.log(err.toStrin()))
    }

    render() {
        return (
    
    <div className="form">
    <form>
      <input placeholder='email' value={this.state.emailemail} onChange={e=>{this.setState({email:e.target.value})}} />
      <input placeholder='password' value={this.state.password} onChange={e=>{this.setState({password:e.target.value})}} />
      <button type="submit" onClick={this.login}>login</button>
      <button onClick={this.signup}>signup</button>
    </form>
    </div>
    
        )
    }
}
