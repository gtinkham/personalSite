import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../imports/ui/header';
import ProfilePicture from '../imports/ui/profilePictures';

const App = () => {
    return (
        <div>
            <Header />
            <ProfilePicture />
        </div>
    );
};

Meteor.startup( () => {
    ReactDOM.render(<App/>, document.querySelector(".render-target"));
});