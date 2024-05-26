import React from "react"
import { Link } from "react-router-dom"

// reactstrap components
import { Button, Card, CardBody, Form, Container, Row, Col, } from "reactstrap"

// core components
import { CardHead } from "components/Card"
import { InputNormal, InputPassword } from "components/Input"
import { CheckBox } from "components/Controls"
import { CardBodyTitle } from "components/Titles"
import { BackgroundDefault } from "components/Background"

class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }

  render() {

    const CardFooter = () => (
      <Row>
        <Col xs="6">
          <Button color="link" className="text-light" >
            <small>Forgot password?</small>
          </Button>
        </Col>
        <Col className="text-right" xs="6">
          <Button color="link" className="text-light" to='/register-page' tag={Link} >
            <small>Create new account</small>
          </Button>
        </Col>
      </Row>
    )

    return (
      <main ref="main">
        <section className="section section-shaped">
          <BackgroundDefault />
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHead title='Sign in with' />
                  <CardBody className="px-lg-5 py-lg-5">
                    <CardBodyTitle title='Or sign in with credentials' />
                    <Form role="form">
                      <InputNormal title='Email' icon='ni ni-email-83' />
                      <InputPassword />
                      <CheckBox title='Remember me' />

                      <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <CardFooter />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    )
  }
}

export default Login
