import React from 'react'
import { Button, Card, CardBody, Col, Container, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'


const ContactUs = () => {

  return (
    <section className="section section-lg pt-lg-0 section-contact-us bg-gradient-default" >

      <Container style={{ paddingTop: '150px' }}>
        <Row className="justify-content-center">
          <Col lg="8">
            <Card className="bg-gradient-secondary shadow" style={{ borderRadius: '10px' }}>
              <CardBody className="p-lg-5">
                <h4 className="mb-1">Want to work with us?</h4>
                <p className="mt-0">
                  Your project is very important to us.
                </p>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-user-run" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Your name"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email address"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-4">
                  <Input
                    className="form-control-alternative"
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  />
                </FormGroup>
                <div>
                  <Button
                    block
                    className="btn-round"
                    color="default"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs