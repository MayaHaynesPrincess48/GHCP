import React from 'react'
import { CardHeader } from 'reactstrap'

import { EmailBtn } from 'components/Buttons'
import { google } from 'assets'
import { github } from 'assets'


const CardHead = ({ title }) => (
  <CardHeader className="bg-white pb-5">
    <div className="text-muted text-center mb-3">
      <small>{title}</small>
    </div>
    <div className="btn-wrapper text-center">
      <EmailBtn title='Github' img={github} />
      <EmailBtn title='Google' img={google} />
    </div>
  </CardHeader>
)

export { CardHead }