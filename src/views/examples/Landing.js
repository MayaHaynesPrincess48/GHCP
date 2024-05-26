import React from "react"
import { Link } from "react-router-dom"
// nodejs library that concatenates classes
import classnames from "classnames"

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Button,
} from "reactstrap"

// index page sections
import PrayerCard from "components/Card/PrayerCard.js"
import { tabInfo, prayerInfo, meditationInfo } from "constant/index.js"
import { BackgroundDefault } from "components/Background"

class Landing extends React.Component {
  state = {
    plainTabs: 0,
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {
    return (
      <main ref="main" className="">
        <section className="section section-shaped" style={{ paddingTop: '200px' }}>
          <BackgroundDefault />
          <Container>
            <Button color='danger' style={{ borderRadius: '10px' }} to='/add-contribute' tag={Link}>+New Contribute</Button>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                {tabInfo.map((title, index) => (
                  <NavItem key={index}>
                    <NavLink
                      aria-selected={this.state.plainTabs === index}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === index,
                      })}
                      onClick={(e) => this.toggleNavs(e, "plainTabs", index)}
                      href="#pablo"
                      role="tab"
                    >
                      {title}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs0">
                    <Row className="justify-content-center">
                      {prayerInfo.map((item, index) => (
                        <PrayerCard key={index} index={index} data={item} />
                      ))}
                    </Row>
                  </TabPane>
                  <TabPane tabId="plainTabs1">
                    <Row className="justify-content-center">
                      {meditationInfo.map((item, index) => (
                        <PrayerCard key={index} index={index} data={item} />
                      ))}
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Container>
        </section>
      </main>
    )
  }
}

export default Landing
