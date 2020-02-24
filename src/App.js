// create your App component here
import React, {Component} from "react";

class App extends Component
{
    state = {data : []}
    componentDidMount()
    {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => this.setstate(data: data))
    }
    render()
    {
        return (
            <div>
            {this.state.data}
            </div>
        )
    }
}
export default App;