import React from "react"
import { Link } from "react-router-dom"
import Headroom from "headroom.js"
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap"
import { defaultAvatar } from "assets"
import { logo } from "assets"
import '../style.css'

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"))
    headroom.init()
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  }

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    })
  }

  onExited = () => {
    this.setState({
      collapseClasses: "",
    })
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom" style={{ marginTop: '37px', height: '60px' }}
          expand="lg"
          id="navbar-main"
        >
          <Container className="bg-success mainHeader" >
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                style={{ height: '40px' }}
                src={logo}
              />
            </NavbarBrand>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={this.state.collapseClasses}
              onExiting={this.onExiting}
              onExited={this.onExited}
              style={{ justifyContent: 'end' }}
            >

              <Row className="navbar-collapse-header">
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img alt="..." src={logo} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar_global">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>

              <>
                <Button active color="link" className="text-white ml-1" to="/landing-page" tag={Link}>
                  Home
                </Button>
                <Button color="link" className="text-white ml-1" to="/user-lists" tag={Link}>
                  User Lists
                </Button>
                <Button color="link" className="text-white ml-1" to="/contact-us" tag={Link}>
                  Contact Us
                </Button>
                <Button color="link" className="text-white ml-1" to="/login-page" tag={Link}>
                  Login
                </Button>
                <Button color="link" className="text-white ml-1" to="/register-page" tag={Link}>
                  Register
                </Button>
              </>

              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav className="p-0">
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <div className="avatar" style={{ backgroundImage: `url(${defaultAvatar})` }}></div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/profile-page" tag={Link}>
                      Profile
                    </DropdownItem>
                    <DropdownItem>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>

            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default DemoNavbar
