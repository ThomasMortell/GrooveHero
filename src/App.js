import { React, Component } from 'react';
import './App.css';
import {auth, db, storage} from './services/firebase'
import Profile from "./components/Profile"; //import user profile class


var song = storage.ref("tracks/Downstream-ElTestigo.mp3");
//console.log("Storageref: " + song);


class App extends Component {
    //set the state of the application
    state = {
        user: null
    }
    /*wait until 'App' component mounts to the screen
      and then retrieve user's information from db*/
    componentDidMount() {
        const userId = "ljMDzpGrG3fO6T8dG7lU" //get the document id of logged in user
        db.collection('users').doc(userId)
          .get()
          .then(user => {
              this.setState({ user: user.data() }) }) //set App state passing the user data we just retrieved
          .catch(error => console.log(error)) //if couldn't find user
        console.log(this.state.user)
    }

    /*getUserProfile() {
        //console.log(this.user)
        return new Profile({
            avatar: this.user.avatar,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            age: this.user.age,
            stylePreference: this.user.stylePreference,
            recordings: this.user.recordings
        })
    }*/


    render() {
        return (
            <div><Profile />
                </div>
        )
    }
}
export default App
