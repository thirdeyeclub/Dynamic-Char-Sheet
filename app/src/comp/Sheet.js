import React, { Component } from 'react';
import axios from 'axios';
import "../sass/sheet.sass"
export default class Sheet extends Component {
    state = {

    }
    componentDidMount(){
        const endpoint = 'http://localhost:5000/example';
        axios
        .get(endpoint)
        .then(res=>{
        this.setState({ex: [...res.data.message]});
}).catch(err => console.log(err));
    }
    render() {
        return (
            <div className="charCard">
                {this.state.ex}
            </div>
        )
    }
}
