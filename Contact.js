import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import './Contact.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'gmailt0fhr9', form.current, 'BuJJ8D7fnr8K8jb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form className='form1' ref={form} onSubmit={sendEmail}>
    <FormGroup>
      <br />
        <div>
          <h1>Contact us!</h1>
        </div>
      <br />
        <p> Please fill out all field within the form regarding your concerns</p>
          <Label for="Fullname">
            Full Name
          </Label>
          <Input
            id="Fullname"
            name="name"
            placeholder="Fullname"
            type="text" required
          />
    </FormGroup>
    <FormGroup>
        <Label for="Username">
          Username
        </Label>
            <Input
              id="Username"
              name="username"
              placeholder="Username"
              type="text" required
            />
      </FormGroup>
      <FormGroup>
        <Label for="Text">
          Message
        </Label>
            <Input
              id="Text"
              name="text"
              placeholder="Message"
              type="textarea" required
            />
    </FormGroup>
    <Button>
      Submit
    </Button>
  </Form>
  );
};

export default ContactUs;