import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Home from './Home';
import People from './People';

class Contact extends React.Component {
    render() {
        return (
			<div className="root">  
			  <h1>Simple SPA</h1>
			  <ul className="Text-Style">
				<li><a href="/">Home</a></li>
				<li><a href="/People">People</a></li>
				<li><a href="/Contact">Contact</a></li>
			  </ul>
			  <div className="content">
				 <p>Content Contact</p>
			  </div>
			</div>
		);
    }
}

export default Contact;