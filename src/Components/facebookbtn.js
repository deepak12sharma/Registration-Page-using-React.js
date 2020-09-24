import React,{ Component } from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


  firebase.initializeApp({
  apiKey: "AIzaSyC38VQ6tEBtmf7f5IdACpPrTglk6yz_RzE",
  authDomain: "facebooklogin-ea678.firebaseapp.com"
})



   class Facebookbtn extends Component
  {
    state={isSignedIn:false}

    uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,

    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  render(){
    return(
  <div className="App">
  {this.state.isSignedIn ?(
    <span>
             <div>Signed In!</div>
             <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
             <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
             <img
               alt="profile picture"
               src={firebase.auth().currentUser.photoURL}
             />
             </span>
  ):(
    <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}/>
  )}
  </div>
  )
  }
}
  export default Facebookbtn;
