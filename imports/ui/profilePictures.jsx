import React, { Component } from 'react';


export default class ProfilePicture extends Component {

    render() {

        return (
            <div>
                <ul className="profPicList">
                    <li onClick={console.log("Grant is great")}><h1>GRant is great</h1></li>
                    <li onClick={console.log("Grant is bad")}><h1>GRant is great</h1></li>
                </ul>
            </div>
        )
    }
}