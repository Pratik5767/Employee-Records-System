import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await fetch("http://localhost:9000/api/employees");
                const data = await res.json();

                setEmployees(data);
            } catch (error) {
                console.error("Error Fetching Employees: ", error.message);
            }
        }

        fetchEmployee();
    }, [])

    const handleDelete = async (employeeId) => {
        try {
            const res = await fetch(`http://localhost:9000/api/employee/${employeeId}`, {
                method: "Delete",
            });

            if (res.ok) {
                setEmployees((prevEmployee) => 
                    prevEmployee.filter((employee) => employee.id !== employeeId)
                )
            }

            console.log(`Employee with ID ${employeeId} deleted successfully`)
        } catch (error) {
            console.error("Error deleting Employee", error.message);
        }
    }

    const handleUpdate = (employeeId) => {
        navigate(`/employee/${employeeId}`);
    }

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h1 className='text-center text-bg-danger p-2 mb-0'>Employees</h1>

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>PhoneNo</th>
                                    <th>Department</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    employees.map((employee) => (
                                        <tr key={employee.id}>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phoneNo}</td>
                                            <td>{employee.department}</td>
                                            <td>
                                                <Button variant='outline-secondary' onClick={() => handleUpdate(employee.id)}>
                                                    Update
                                                </Button>{" "}
                                                <Button variant='outline-danger' onClick={() => handleDelete(employee.id)}>
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;