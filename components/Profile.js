import avatar from '../media/avatar.png';
import logo from '../media/logo.png';
import rockcover from '../media/rock-album-cover.jpg';
import hiphopcover from '../media/hiphop-album-cover.jpg';
import React, { Component } from 'react';
import Tabs from "./Tabs";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            avatar: avatar, // this needs to later be retrieved from firebase storage based on user id
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            age: props.age,
            records: props.records,
            stylePref: props.stylePref
        };
    }

    render() {
        return (
            <div className="user-profile-info">
                <header className="app-header">
                    <img src={logo} id="app-logo" alt="logo" />
                    <span id="app-name">GROOVEHero</span>
                </header>
                <div className="user-info">
                    <p id="my-acc-label">MY ACCOUNT</p>
                    <img id="user-avatar" src={avatar} alt="avatar" />
                    <br></br>
                    {/*user profile information*/}
                    <label className="labels" htmlFor="fname" >First Name:</label>
                    <input id="fname" className="user-info-fields" type="text" value={this.props.firstName} readOnly/>
                    <label className="labels" htmlFor="lname" >Last Name:</label>
                    <input id="lname" className="user-info-fields" type="text" value={this.props.lastName} readOnly/>
                    <label className="labels" htmlFor="email" >Email:</label>
                    <input id="email" className="user-info-fields" type="text" value={this.props.email} readOnly/>
                    <label className="labels" htmlFor="age" >Age:</label>
                    <input id="age" className="user-info-fields" type="text" value={this.props.age} readOnly/>
                    <label className="labels" htmlFor="styles-preference" >Music style preference:</label>
                    <input id="styles-preference" className="user-info-fields" type="text" value={this.props.myStyles} readOnly/>
                </div>

                <div className="my-styles">
                    <Tabs className="my-styles">
                        <div label="My recordings">
                            <ol className="my-recordings">
                                <li className="playback-control"><audio src={this.props.userRec1} controls /></li>
                                <li className="playback-control"><audio src="" controls /></li>
                                <li className="playback-control"><audio src="" controls /></li>
                                <li className="playback-control"><audio src="" controls /></li>
                            </ol>
                        </div>
                        <div label="My favorite styles">
                            <div className="my-favorite-styles">
                                <img id="rock-cover" class="covers" src={rockcover} alt="rock cover"></img>
                                <img id="hiphop-cover" class="covers" src={hiphopcover} alt="hiphop cover"></img>
                            </div>
                        </div>
                        <div label="Frequently used styles">
                            <div className="my-frequent-styles">
                                <img id="hiphop-cover" class="covers" src={hiphopcover} alt="hiphop cover"></img>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>);
    }
}
export default Profile;