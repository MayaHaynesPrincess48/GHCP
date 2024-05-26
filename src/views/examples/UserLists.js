import React, { useState } from 'react'
import { Container } from 'reactstrap'

import { ModalUserData } from 'components/Modals'
import { TableUser } from 'components/Tables'
import { userListInfo } from 'constant'
import { BackgroundDefault } from 'components/Background'


const UserLists = () => {

  const [state, setState] = useState(false)
  const [selData, setSelData] = useState(null)

  return (
    <section className="section section-shaped section-lg">
      <BackgroundDefault />
      <Container className="pt-lg-7">
        <TableUser data={userListInfo} setSelData={setSelData} setState={setState} />
        {selData && <ModalUserData data={selData} state={state} setState={setState} />}
      </Container>
    </section >
  )
}

export default UserLists