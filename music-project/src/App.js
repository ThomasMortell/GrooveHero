import { React, Component } from 'react';
import './App.css';
import {db} from './services/firebase'
import Profile from "./components/Profile"; //import user profile class


//var song = storage.ref("tracks/Downstream-ElTestigo.mp3");
//console.log("Storageref: " + song);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //set the state of the application
            //state = {
            userId: "ljMDzpGrG3fO6T8dG7lU",
            user: [],
            users: []
        };
    }
    /*wait until 'App' component mounts to the screen
      and then retrieve user's information from db*/
    componentDidMount() {
        //const userId = "ljMDzpGrG3fO6T8dG7lU" //get the document id of logged in user
        db.collection('users')
          .get()
            .then(snapshot => {
                const users = []
                snapshot.forEach(
                    doc => {
                        const data = doc.data()
                        users.push(data)
                    })
              this.setState({ users: users }) }) //set App state passing the user data we just retrieved
          .catch(error => console.log(error)) //if couldn't find user
        //console.log(this.state.users)

        //NOT WORKING
        const userId = "ljMDzpGrG3fO6T8dG7lU" //get the document id of logged in user
        db.collection('users').doc(userId)
            .get()
            .then(user => {
                //const user= null
                console.log(user.data())
                this.user = user.data() })
             //set App state passing the user data we just retrieved
            .catch(error => console.log(error)) //if couldn't find user
        console.log(this.state.user)
    }


    render() {
        return (

            < div className="App">
                {
                    this.state.users &&
                    this.state.users.map(user => {
                        return (  
                            //console.log(user.stylePreference),
                            <Profile
                                userId={this.state.userId}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                eMail={user.eMail}
                                age={user.age}
                                recordings={user.recordings}                                
                                stylePreference={user.stylePreference} />
                        )
                    })
                }
            </div>
        )
    }
}
export default App
