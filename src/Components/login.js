import React from 'react';
import { Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-undef
function Login () {
    return (
      <div className="form">
        <Form>
          <Form controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form>

          <Form controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form>
          <Link to="/serve" className="links">Submit</Link>
        </Form>
      </div>
    );
  }

export default Login;
