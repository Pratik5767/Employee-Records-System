import React, { useState } from 'react'
import "./PostUser.css";
import Form  from 'react-bootstrap/form';
import Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const PostUser = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNo: "",
        department: ""
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await fetch("http://localhost:9000/api/employee", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            console.log("Employee created ", data);
            navigate("/")
        } catch (error) {
            console.log("Error occured while creating employee: ", error.message);
        }
    }

    return (
        <div>
            <div className="center-form">
                <h1>Post New Employee</h1>

                <Form onSubmit={handleSubmit}>
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