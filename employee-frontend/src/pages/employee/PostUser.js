import React, { useState } from 'react'
import "./PostUser.css";
import Form  from 'react-bootstrap/form';
import Button  from 'react-bootstrap/Button';

const PostUser = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNo: "",
        department: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    return (
        <div>
            <div className="center-form">
                <h1>Post New Employee</h1>

                <Form>
                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='text'
                            name='name'
                            placeholder='Enter Name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder='Enter Email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='text'
                            name='phoneNo'
                            placeholder='Enter PhoneNo'
                            value={formData.phoneNo}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='text'
                            name='department'
                            placeholder='Enter Department'
                            value={formData.department}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Post Employee
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default PostUser