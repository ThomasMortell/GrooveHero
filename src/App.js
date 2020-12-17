import { React, Component } from 'react';
import './App.css';
import Profile from "./components/Profile";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "ljMDzpGrG3fO6T8dG7lU", //hardcoded for now, will later be retrieved from authentication
        };
    }

    render() {
        return (
            < div className="App">
                {
                    <Profile userId={this.state.userId}/>
                }
            </div>
        )
    }
}
export default App
