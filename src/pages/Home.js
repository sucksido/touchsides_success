import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contact from "./Contact";
import People from './People';

class Home extends React.Component {
    render() {
        return (
			<div className="root">  
			  <h1>Simple SPA</h1>
			  <ul className="Text-Style">
				<li><a href="/">Home</a></li>
				<li><a href="People">People</a></li>
				<li><a href="/Contact">Contact</a></li>
			  </ul>
			</div>  
		);
    }
}


export default Home;