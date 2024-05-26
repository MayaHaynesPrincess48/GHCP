import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button, Modal,
  Card, CardHeader, CardBody,
  Form,
  CardFooter,
  Container,
} from "reactstrap"

import { InputPassword, InputNormal, TextArea } from 'components/Input'
import { ProfileAvatar } from 'components/Avatars'
import { NameBtn } from 'components/Buttons'
import { TableContribute } from 'components/Tables'

const ModalProfile = () => {

  const [state, setState] = useState(false)

  return (
    <div className="card-profile-actions pb-4">
      <Button className="btn-1 ml-1 float-right" color="warning" type="button" onClick={() => setState(true)}>
        Edit Profile
      </Button>
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={state}
        toggle={() => setState(false)}
      >
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-white pt-4 text-center">
              <h3 className="h3 text-success font-weight-bold">Edit Profile</h3>
            </CardHeader>
            <CardBody style={{ padding: '40px 80px' }}>
              <Form role="form">
                <InputNormal title='Name' icon='ni ni-email-83' />
                <InputPassword />
                <div className='d-flex' style={{ justifyContent: 'space-around' }}>
                  <InputNormal title='First Name' icon='ni ni-circle-08' />
                  <InputNormal title='Last Name' icon='ni ni-circle-08' />
                </div>
                <div className='d-flex'>
                  <InputNormal title='User Name' icon='ni ni-circle-08' />
                  <InputNormal title='Age' icon='ni ni-calendar-grid-58' />
                  <InputNormal title='Location' icon='ni ni-square-pin' />
                </div>
                <InputNormal title='CompanyPosition' icon='ni ni-istanbul' />
                <InputNormal title='Education' icon='ni ni-hat-3' />
                <div className='border-top'>
                  <TextArea />
                </div>
              </Form>
            </CardBody>
            <CardFooter className='text-right px-5'>
              <Button className="btn-1 ml-1" color="success" type="button">
                Success
              </Button>
              <Button className="btn-1 ml-1" color="danger" type="button">
                Danger
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Modal>
    </div>
  )
}

const ModalUserData = ({ data, state, setState }) => (
  <Modal
    className="modal-dialog-centered"
    size="lg"
    isOpen={state}
    toggle={() => setState(false)}
  >
    <div className="modal-header">
      <h6 className="modal-title" id="modal-title-default">
        {data.userName} 's Profile
      </h6>
      <span className="ni ni-fat-remove lead mt-0" onClick={() => setState(false)} />
    </div>
    <div className="modal-body">
      <div className='itemCenter'>
        <ProfileAvatar avatar={data.avatar} />
      </div>
      <div className="text-center pt-2">
        <h3>
          User Name : <b>{data.userName}</b> <br />
        </h3>
        <div className="h6 font-weight-300">
          Location : <b>{data.location}</b>
        </div>
      </div>
      <Container>
        <TableContribute data={data.contributions} />
      </Container>
    </div>
    <div className="modal-footer">
      <Button
        className="ml-auto"
        color="primary"
        onClick={() => setState(false)}
      >
        OK
      </Button>
    </div>
  </Modal>
)

const ModalContribute = ({ data, state, setState, color }) => {

  const [handFlag, setHandFlag] = useState(false)

  const contributions = data.prayers ? data.prayers : data.meditations

  return (
    <Modal
      className="modal-dialog-centered"
      style={{ borderRadius: '30px' }}
      size="lg"
      isOpen={state}
      toggle={() => setState(false)}
    >
      <Container className={`p-5 text-center text-${color}`}>
        <div className='my-2'>
          <NameBtn title={data.profile} color={color} />
          <b className='h2'>{data.title}</b>
        </div>
        <img className='w-100 border' src={data.image} alt='...' />
        <div className='itemCenter mt-5'>
          <Button color='info' to='/login-page' tag={Link}>{data.prayers?.length} {data.meditations?.length}</Button>
          {/* <Button color='info' to='/login-page' tag={Link}>{data.prayers.length}</Button> */}
          <p className='h5 p-2 border'>
            {data.description}
          </p>
        </div>
        <div className='my-4'>
          <Button color='success' to='/login-page' tag={Link}>Login</Button>
          <Button color='success' onClick={() => { setHandFlag(true) }}>Raise Hand</Button>
          <Button color='warning'>Social Media share</Button>
        </div>
        <div className='border my-5'>
          {handFlag && <TextArea />}
        </div>
        <TableContribute data={contributions} />
      </Container>
    </Modal>
  )
}


export { ModalProfile, ModalUserData, ModalContribute }