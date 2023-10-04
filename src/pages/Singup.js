import React from "react";
import Base from "../components/Base";
import { Container, Card, CardHeader, CardBody, Label, Form, FormGroup, Input, Button } from "reactstrap";
import { Row, Col } from "reactstrap";
function Signup(){
    return(
        <Base>
        <Container>
        <Row className="mt-4">

            <Col sm={{size:6, offset:3}}>
            
            <Card color="dark" inverse>

            <CardHeader>

             <h3>Fill Information to Register !!</h3> 
             <hr></hr>
            <CardBody>

                <Form>
                    <FormGroup>

                        <Label for="name">Enter Name</Label>
                        <Input type="text" id="name" placeholder="Enter here.."/>
                    </FormGroup>

                    <FormGroup>

                        <Label for="email">Enter Email</Label>
                        <Input type="email" id="email" placeholder="Enter here.."/>
                    </FormGroup>

                    <FormGroup>

                        <Label for="password">Enter Password</Label>
                        <Input type="Password" id="password" placeholder="Enter here.."/>
                    </FormGroup>

                    <FormGroup>

                        <Label for="password">Please Tell Us About Yourself</Label>
                        <Input type="textarea" style={{height: "250px"}} id="about" placeholder="Enter here.."/>
                    </FormGroup>

                    <Container className="text-center">
                    <Button outline color="light">Register</Button>
                    <Button outline color="secondary" type="reset" className="ms-2">Reset</Button>     
                   </Container>
                </Form>
            </CardBody>
            </CardHeader>


        </Card>
            </Col>
        </Row>

        </Container>
        </Base>
    );
};

export default Signup;