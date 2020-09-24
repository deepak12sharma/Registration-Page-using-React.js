import React from 'react';
import GoogleBtn from './Components/button.js';
import './App.css';
import Facebookbtn from './Components/facebookbtn.js';
import axios from 'axios';
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      email:'',
      password:''
    }
  }
  state = {
      isPasswordShown: false,

    }

    togglePasswordVisiblity = () => {
      const { isPasswordShown } = this.state;
      this.setState({ isPasswordShown: !isPasswordShown });

    };
   submitHandler=(e)=>{
     e.preventDefault();
     console.log(this.state);
     axios.post("https://reqres.in/api/register",this.state)
     .then(response=>console.log(response))
     .catch(response=>console.log(response))
   }
  render(){
const { email,password}=this.state;

    return (

      <div className="sign">
      <center><h5>Signup</h5></center>

      <center><p className="para">Create your account</p></center>
      <center><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci.</p></center>

      <div>


    <center><Facebookbtn/></center>
     <h4>OR</h4>
    </div>
    <form onSubmit={this.submitHandler}>
    <center><input type="text" placeholder="First Name" /></center>
    <center><input type="text" placeholder="Last Name" /></center>
    <center><input type="email" placeholder="Email Address" onChange={(event)=>this.setState({email:event.target.value})}/></center>
    <center><input type="Password" name="password" onChange={(event)=>this.setState({password:event.target.value})} placeholder="Password"
       type={this.state.isPasswordShown ? "text" : "password"}
       name="pass"/><i className="fa fa-eye password-icon"
       onClick={this.togglePasswordVisiblity} /></center>

 <p className="lorem">By clicking Signup,you agree to our <a href="">Terms Of Use</a> and our <a href="">Privacy Terms</a>.</p>
 <button type="submit">Sign Up</button>
 </form>
</div>

    );
  }
}
export default App;
