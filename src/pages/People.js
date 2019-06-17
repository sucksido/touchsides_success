import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Home from './Home';
import Contact from './Contact';
import axios from 'axios';

class People extends React.Component {
    /*render() {
        return (
			<div className="root">  
			  <h1>Simple SPA</h1>
			  <ul className="Text-Style">
				<li><a href="/">Home</a></li>
				<li><a href="/People">People</a></li>
				<li><a href="/Contact">Contact</a></li>
			  </ul>
			  <div className="content">
				 <p>Content People</p>
			  </div>
			</div>
		);
    }*/
	state = {
        images: [],
    };

    componentDidMount() {
        let token = '406308175.1677ed0.a15d56e19f39469eb2dec907402243c9';
        let num_photos = 20;


        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
            .then(res => {
                console.log(res.data.data);
                this.setState({ images: res.data.data });
            })
            .catch(err => {
                console.log(err)
            })

    }

	 render() {
        return(
            <div className="root">
			<p>Hello World</p>
                { this.state.images.map((image) => {
                    return <img src={image.images.thumbnail.url} />
					
                })}
            </div>
        )
    }
}

export default People;