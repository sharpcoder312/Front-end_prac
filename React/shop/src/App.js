import React, {useState} from 'react'
import { Navbar,Nav,NavDropdown,Jumbotron,Form,Button,FormControl } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './Detail'

import { Link, Route, Switch } from 'react-router-dom'

function App(){
  const [shoes, setShoes] = useState(data)
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ShoeSop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">
                Detail
              </Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/"> 
          <div>
            <Jumbotron className="background">
              <h1>20% Season Off</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <div className="container">
              <div className="row">
                { 
                  // shoes.map(
                  //   shoe => (<Item title={shoe.title} content={shoe.content} price={shoe.price} img={shoe.img} key={shoe.id}/>)
                  // )
                  shoes.map(
                    (shoe, i) => (<Item shoes={shoes[i]}/>)
                  )
                  // shoes.map(
                  //   (shoe, i) => (<Item shoes={shoe}/>)
                  // )
                }
              </div>
            </div>
          </div>
        </Route>

        <Route path="/detail">
            <Detail />
        </Route>

        <Route path="/:id"> 
          {/* :id란 url의 파리미터를 의미함. 즉 /모든문자 경로를 의미. 그러므로 현재있는 모든 url에서 아래의 코드가 다 보여진다. */}
            <div>hi</div>
        </Route>
      </Switch>
    </div>
  )
}

function Item({shoes}) {

  return (
    <div className="col-md-4">
      <img src={shoes.img} width="100%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <span>{shoes.price}</span>
    </div>
  )
}

export default App;
