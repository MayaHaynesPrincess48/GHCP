import { ModalUserData } from 'components/Modals'
import { userListInfo } from 'constant'
import React, { useState } from 'react'
import { Badge, Card, Container, Table, UncontrolledCollapse } from 'reactstrap'


const TableContribute = ({ data }) => {

  const [selData, setSelData] = useState(null)
  const [userFlag, setUserFlag] = useState(false)

  const selUser = (userName) => {
    setUserFlag(true)
    userListInfo.filter((person) => person.userName === userName && setSelData(person))
  }

  return (
    <>
      <Table hover>
        <tbody>
          {data.map((item, index) => {
            userListInfo.filter((user) => user.userName === item.userName && (item.flag = user.location))
            return (
              <tr key={index} className='border'>
                <th onClick={() => selUser(item.userName)}><u>{item.userName}</u></th>
                <td>{item.date}</td>
                <th>
                  {item.flag}
                  <Badge className='float-right' color="primary" id={`toggler${item.userName}`} pill onClick={function noRefCheck() { }}>
                    view
                  </Badge>
                  <UncontrolledCollapse toggler={`#toggler${item.userName}`} className='mt-3'>
                    <Card color='info'>
                      {item.content}
                    </Card>
                  </UncontrolledCollapse>
                </th>
                {selData && <ModalUserData data={selData} state={userFlag} setState={setUserFlag} />}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

const TableContribution = ({ data }) => (
  <div>
    <div className='text-center mt-4'><h4>Contribution Lists</h4></div>
    <Container style={{ height: '230px', overflowY: 'scroll' }}>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Content</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{item.userName}</td>
              <td>{item.content}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  </div>
)

const TableUser = ({ data, setSelData, setState }) => {

  const handleClick = (index) => {
    setState(true)
    setSelData(data[index])
  }

  return (
    <Table borderless hover>
      <thead className='bg-green'>
        <tr>
          <th>#</th>
          <th>Avatar</th>
          <th>UserName</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody style={{ backgroundColor: '#ddd' }}>
        {data?.map((item, index) => (
          <tr key={index} onClick={() => handleClick(index)}>
            <th scope="row">{index + 1}</th>
            <td><img style={{ width: '30px' }} src={item.avatar} alt='...' /></td>
            <td>{item.userName}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export { TableContribute, TableContribution, TableUser }