import React from "react"
import { Link } from "react-router-dom"

import {
  Button,
  Card,
  CardBody,
  Form,
  Container,
  Row,
  Col,
} from "reactstrap"

import { CardHead } from "components/Card"
import { CardBodyTitle } from "components/Titles"
import { InputNormal, InputPassword } from "components/Input"
import { CheckBox } from "components/Controls"
import { BackgroundDefault } from "components/Background"

class Register extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {
    return (
      <main ref="main">
        <section className="section section-shaped">
          <BackgroundDefault />
          <Container>
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHead title='Sign up with' />
                  <CardBody className="px-lg-5 py-lg-5">
                    <CardBodyTitle title='Or sign up with credentials' />
                    <Form role="form">
                      <div className="d-flex">
                        <InputNormal title='First Name' icon='ni ni-circle-08' />
                        <InputNormal title='Last Name' icon='ni ni-circle-08' />
                      </div>
                      <InputNormal title='User Name' icon='ni ni-circle-08' />
                      <InputNormal title='Email' icon='ni ni-email-83' />
                      <InputPassword />
                      <InputPassword />
                      <div style={{ display: 'flex' }}>
                        <CheckBox title='I agree with the ' />
                        <a href="#pablo">&nbsp; Privacy Policy</a>
                      </div>
                      <div className="text-center">
                        <Button className="mt-4" color="primary" to='/login-page' tag={Link} >
                          Create account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    )
  }
}

export default Register
