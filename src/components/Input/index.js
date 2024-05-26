import React, { useState } from 'react'
import { Button, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'


const InputNormal = ({ title, icon }) => (
  <FormGroup>
    <InputGroup className="input-group-alternative">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className={icon} />
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder={title} type={title === 'Email' ? 'email' : 'text'} />
    </InputGroup>
  </FormGroup>
)

const InputPassword = () => {

  const [flag, setFlag] = useState(false)

  return (
    <FormGroup>
      <InputGroup className="input-group-alternative">
        <InputGroupAddon addonType="prepend">
          <InputGroupText onClick={() => { setFlag(!flag) }}>
            <i className='ni ni-lock-circle-open' />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder='password' type={!flag ? 'password' : 'text'} autoComplete="off" />
      </InputGroup>
    </FormGroup>
  )
}

const TextArea = () => (
  <>
    <textarea placeholder='Summary' className='textarea'>
    </textarea>
    <Button color='danger'>Send</Button>
  </>
)

export { InputNormal, InputPassword, TextArea }