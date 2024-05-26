import React from 'react'
import { Button, Card, Container, } from 'reactstrap'

import { BackgroundDefault } from 'components/Background'
import { InputNormal } from 'components/Input'
import FileUpload from './Upload'
// import GoogleSignIn from './GoogleSignin'
import MyHCaptcha from './HCaptcha'


const AddContribute = () => {



  return (
    <section className='section section-shaped' style={{ paddingTop: '150px', height: 'auto' }}>
      <BackgroundDefault />
      <Container className='bg-white p-5'>
        <Card className='p-3 h-100 flexCol text-center' style={{ background: '#f1f1f1', }}>
          <div>
            <p className='text-success h1'>Create New Contribute</p>
          </div>
          <InputNormal title='Title' icon='ni ni-support-16' />
          <FileUpload />
          <textarea placeholder='Description' className='textarea border my-3'>
          </textarea>
          <div>
            <Button className='float-right' color='danger'>Submit</Button>
          </div>
        </Card>
        {/* <GoogleSignIn /> */}
        <MyHCaptcha />
      </Container>
    </section>
  )
}

export default AddContribute