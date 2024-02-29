import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Registro = () => {
  const [nuevoRegistro, setNuevoRegistro] = useState({
    name: '',
    last_name: '',
    username: '',
    email: '',
    role_id: 1,
    password: ''
  });

  const handleChange = (e) => {
    setNuevoRegistro({
      ...nuevoRegistro,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://node-restobar-project.onrender.com/users', nuevoRegistro);
      alert('Usuario registrado con éxito.');
      // Puedes redirigir a otra página o realizar otra acción aquí si es necesario
    } catch (error) {
      console.error('Error al agregar el registro:', error);
      alert('Ocurrió un error al registrar el usuario.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h1 className="mb-4">Registro</h1>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" placeholder="Ingresa tu nombre" value={nuevoRegistro.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="last_name">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" name="last_name" placeholder="Ingresa tu apellido" value={nuevoRegistro.last_name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" name="username" placeholder="Ingresa tu usuario" value={nuevoRegistro.username} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" name="email" placeholder="Ingresa tu correo electrónico" value={nuevoRegistro.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="password" placeholder="Ingresa tu contraseña" value={nuevoRegistro.password} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
