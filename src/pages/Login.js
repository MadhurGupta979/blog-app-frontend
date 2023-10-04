import React from "react";
import Base from "../components/Base";
import { Container, Card, CardHeader, CardBody, Label, Form, FormGroup, Input, Button } from "reactstrap";
import { Row, Col } from "reactstrap";

function Login(){
    return(
        <Base>
        <Container>
        <Row className="mt-4">

            <Col sm={{size:6, offset:3}}>
            
            <Card color="dark" inverse>

            <CardHeader>

             <h3> Login Here!!</h3> 
             <hr></hr>
            <CardBody>

                <Form>
                    

                    <FormGroup>

                        <Label for="email">Enter Email</Label>
                        <Input type="email" id="email" placeholder="Enter here.."/>
                    </FormGroup>

                    <FormGroup>

                        <Label for="password">Enter Password</Label>
                        <Input type="Password" id="password" placeholder="Enter here.."/>
                    </FormGroup>


                    <Container className="text-center">
                    <Button outline color="light">Login</Button>
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

export default Login;