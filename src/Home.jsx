import { Card, Alert, Container, Row, Col, Jumbotron, Button, Dropdown } from 'react-bootstrap';
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <Card>
        <Card.Img className="homeimg" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFfg_J4WJxY5A6N-aBYVETPoDijLvO9Ri9Q&usqp=CAU" />
      </Card>

      <Alert variant="info">By clicking on "Login" button, you agree to the Terms of Service (Terms & Conditions) of usage of Banking of ABC.</Alert>
      <hr />
      <Container>
        <Row>
          <Col><Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXmxWyKAT4K6YHrd9ejQ3w3hb55nXXyFVmQ&usqp=CAU"/>
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Loans
  </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Personal Loan</Dropdown.Item>
                  <Dropdown.Item >Home Loan</Dropdown.Item>
                  <Dropdown.Item>Vehicle Loan</Dropdown.Item>
                  <Dropdown.Item>Education Loan</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card></Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EcNHXW-FgZ42Tkxez6PqpjwJ4sHJCxfv4g&usqp=CAU" />
              <Card.Body>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Digital Banking
  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item>Internet Banking</Dropdown.Item>
                  <Dropdown.Item >Self Banking</Dropdown.Item>
                  <Dropdown.Item>Mobile Banking</Dropdown.Item>
                  <Dropdown.Item>ATM Banking</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            </Card>
          </Col>
          <Col> <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK7swVSWxG-c_7mtPdixlgQ2y1Iq_XMlmCQ&usqp=CAU"/>
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Deposit
  </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item>Salary Account</Dropdown.Item>
                  <Dropdown.Item >Demat Account</Dropdown.Item>
                  <Dropdown.Item>Saving Account</Dropdown.Item>
                  <Dropdown.Item>Fixed Deposit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card></Col>

        </Row>

      </Container><br></br>
      </div>
     );
     
     }

export default Home;