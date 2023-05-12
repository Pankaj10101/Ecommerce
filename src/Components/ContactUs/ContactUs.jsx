import { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Store } from '../../store/context';

const ContactUs = () => {

    const {sendData} = useContext(Store)
  const [userData, setUserData] = useState([])

  const handleChange= (name, value)=>[
    setUserData((prev)=>({...prev, [name]:value}))
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(userData)
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
      <Form onSubmit={handleSubmit} className="bg-light p-4 rounded" style={{ width: '800px' }}>
        <h2 className="mb-4">Contact Us</h2>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name = 'name'  onChange={(e) => handleChange(e.target.name, e.target.value)} className="mb-3" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name = 'email' onChange={(e) => handleChange(e.target.name, e.target.value)} className="mb-3" />
        </Form.Group>

        <Form.Group controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" name = 'phoneNo' onChange={(e) => handleChange(e.target.name, e.target.value)} className="mb-3" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
