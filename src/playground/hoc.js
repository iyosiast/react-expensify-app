/*
Higher Order Component (HOC) :- 
A Component(HOC) renders another component.
The main advatanges of HOC are:
Reuse Code
Render Hijacking
Props manipulation
Abstract state
*/

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is {props.info}</p>
    </div>
); 

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
    <div>
        {props.isAdmin && <p>This is private info. Please don't share</p>}
        
        <WrappedComponent {...props} />
    </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (<p>Please Log in</p>)
        }
        </div>
    );
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} info="These are the details" />,
//    document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="These are the details" />,
    document.getElementById('app'));

