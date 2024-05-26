import React from "react"

// reactstrap components
import { Container, Card, Row, Col, } from "reactstrap"

// core components
import { myProfile } from "constant"
import { ProfileAvatar } from "components/Avatars"
import { ModalProfile } from "components/Modals"
import { ProfileSmallText } from "components/Titles"
import { BackgroundAlpha4 } from "components/Background"
import { TableContribute } from "components/Tables"

class Profile extends React.Component {

  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {

    const ProfileData = () => (
      <div className="text-center">
        <div style={{ paddingTop: '150px' }}>
          <h3>
            Full Name : <b>{myProfile.firstName} {" "} {myProfile.lastName}</b> <br />
            User Name : <b>{myProfile.userName}</b> <br />
            Age : <b> {myProfile.age}</b> <br />
          </h3>
          <ProfileSmallText title={['Email', 'Location']} data={[myProfile.email, myProfile.location]} />
          <div className="h6 mt-4">
            Company : <b> {myProfile.companyPosition}</b> <br />
            University : <b>{myProfile.education}</b>
          </div>
        </div>
        <div className="m-5 p-5 border-top ">
          <h4>Summary</h4>
          <i>{myProfile.summary}</i>
        </div>
        <TableContribute data={myProfile.contributions} />
      </div >
    )

    return (
      <main className="profile-page" ref="main">
        <BackgroundAlpha4 />
        <section className="section">
          <Container>
            <Card className="card-profile shadow" style={{ marginTop: '-450px' }}>
              <Row className="justify-content-center">
                <Col>
                  <ProfileAvatar avatar={myProfile.avatar} />
                  <ProfileData />
                </Col>
              </Row>
              <ModalProfile />
            </Card>
          </Container>
        </section>
      </main>
    )
  }
}

export default Profile
