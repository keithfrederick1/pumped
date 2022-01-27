import React from 'react';
import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const WorkoutLog = () => {
  return (
    <div>
      <h2>WorkoutLog</h2>
      <Form>
  <Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Workout Name"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>LOG</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder="Describe Your Experience" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Row>
</Form>
    </div>
  )
}

export default WorkoutLog;
