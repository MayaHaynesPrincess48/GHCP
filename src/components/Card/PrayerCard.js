import React, { useState } from 'react'
import { Button, Card, CardBody, Col, } from 'reactstrap'

import { colorInfo } from 'constant'
import { ModalContribute } from 'components/Modals'

const PrayerCard = ({ data, index }) => {

  const [state, setState] = useState(false)

  return (
    <Col lg="4">
      <Card className="card-lift--hover shadow border-0 my-3 border" >
        <CardBody className="py-5">
          <h6 className={`text-${colorInfo[index % 6]} text-uppercase`}>
            {data ? data.title : 'Download Argon'}
          </h6>
          <div className="rounded shadow-lg transform-perspective-right w-auto imgCover" style={{ height: '200px', backgroundImage: `url(${data.image})` }}> </div>
          <Button
            className="mt-4"
            color={colorInfo[index % 6]}
            onClick={() => setState(true)}
          >
            Contribute
          </Button>
          <ModalContribute data={data} state={state} setState={setState} color={colorInfo[index]} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default PrayerCard