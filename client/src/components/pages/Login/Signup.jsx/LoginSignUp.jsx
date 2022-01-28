import React from 'react'
import { Form, Button} from 'react-bootstrap';


const  LoginSignUp = () => {

  const googleAuth = () => {
    //event handler for click of sign in with google , should redirect to passport- oauth page
    
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" >
  </Form.Group>
  <Button variant="outline-info" type="submit">
  </Button>
  <Button variant="info" type="submit" onClick={googleAuth}>
    Sign-in with Google
  </Button>
</Form>
    </div>
  )
}

export default LoginSignUp
