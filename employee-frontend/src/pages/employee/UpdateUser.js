import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./UpdateUser.css";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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
            [name]: value
        })
    }

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await fetch(`http://localhost:9000/api/employee/${id}`);
                const data = await res.json();

                setFormData(data);
            } catch (error) {
                console.error("Error while fetching user: ", error.message);
            }
        }

        fetchEmployee();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:9000/api/employee/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log("Updated User: ", data);

            navigate("/");
        } catch (error) {
            console.error("Error while updating user: ", error.message);
        }
    }

    return (
        <>
            <div className="center-form">
                <h1>Edit Employee</h1>

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
                        Edit Employee
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default UpdateUser;