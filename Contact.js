import React from 'react'
import { EmailJSResponseStatus } from 'emailjs-com';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import './Contact.css'



const Contact = () => {
  return (
    <Form className='form1'>
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
  )
  }

export default Contact