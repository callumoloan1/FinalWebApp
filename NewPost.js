import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import './NewPost.css'

const NewPost = ({ AddPost }) => {
    const [title, setTitle] = useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        AddPost(title);
        setTitle('');
    }
    return (
        <Form className='form1' onSubmit ={handleSubmit}>
            <FormGroup>
                <br />
                 <div>
                    <h1>Diary Journal</h1>
                 </div>
                    <br />
                <p> Please fill out field to express your concerns</p>
                <Label for="Fullname">
                    Diary Journal
                </Label>
                    <Input className='box'
                        id="Diary"
                        placeholder="How are you feeling today?"
                        name="text"
                        type="textarea" value={title} required onChange={(e) => setTitle(e.target.value) }
                    />
            </FormGroup >
                <input className="button" type="submit" value="Add Post" />
        </Form>
    )
} 

export default NewPost;