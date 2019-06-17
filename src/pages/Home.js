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
			  <div className="content">
				 <p>Content Home</p>
			  </div>
			   <div className="innerWhiteSide" id="message">
              <h1>
                Send us a <strong>message</strong>
              </h1>
              <FormControls width="auto">
                <TextInput
                  label="First Name"
                  id="name"
                  placeholder="John"
                  value={this.state.name}
                  onChangeValue={this.handleChangeValue.bind(this)}
                  valid={this.valid.bind(this)}
                  type="text"
                  rules={["required", "text"]}
                />

                <TextInput
                  label="Surname"
                  id="surname"
                  placeholder="Doe"
                  value={this.state.surname}
                  onChangeValue={this.handleChangeValue.bind(this)}
                  valid={this.valid.bind(this)}
                  type="text"
                  rules={["required", "text"]}
                />
              </FormControls>
              <FormControls width="auto">
                <TextInput
                  label="Cellphone Number"
                  id="number"
                  placeholder="0831234567"
                  value={this.state.number}
                  onChangeValue={this.handleChangeValue.bind(this)}
                  valid={this.valid.bind(this)}
                  type="number"
                  rules={["required", "numeric", "mobile"]}
                />

                <TextInput
                  label="Email"
                  id="email"
                  placeholder="john@gmail.com"
                  value={this.state.email}
                  onChangeValue={this.handleChangeValue.bind(this)}
                  valid={this.valid.bind(this)}
                  type="email"
                  rules={["required", "email"]}
                />
              </FormControls>
              <FormControls width="auto">
                <SpanTextArea>
                  <Label htmlFor="rules">Message</Label>
                  <div className="textwrapper">
                    <textarea
                      cols="2"
                      rows="10"
                      id="rules"
                      onBlur={() => {
                        this.validateMessage();
                      }}
                    />
                  </div>
                </SpanTextArea>
              </FormControls>

              <ButtonControls width="auto" justify="flex-end">
                <NextButton onClick={this.nextStep} disabled={this.state.isButtonDisabled}>
                  Send
                </NextButton>
              </ButtonControls>
              <br />
              <ResponseControls width="100%">
                <Response color={Colors.successText} show={this.state.submitted}>
                  Your message has been sent
                </Response>
                <Response color={Colors.errorText} show={this.state.fieldsRequired}>
                  * All fields are required to continue
                </Response>
              </ResponseControls>
            </div>
			</div>
		);
    }
}


export default Home;