import React, {useState, useContext} from 'react'
import { Navbar,Nav,NavDropdown,Jumbotron,Form,Button,FormControl } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './Detail/Detail'
import axios from 'axios'

import { Link, Route, Switch } from 'react-router-dom'

export let thingContext = React.createContext()
// 1. 같은 변수값을 공유할 범위 생성
// 2. 같은 값을 공유할 HTML을 범위로 싸매기
// 3. useContext(범위이름)로 공유된 값 사용(데이터 바인딩)하기

function App(){
  const [shoes, setShoes] = useState(data)
  const [thing, setThing] = useState([10,11,12])

  const clickMore = () => {
    // axios.post('서버URL', { id : 'codingapple', pw : 1234}) // post요청법. 요청시의 header 설정도 가능
    // 로딩 중 UI 띄우기
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((result)=>{
      // 로딩 중 UI 안보이게하기
      const newShoes = [...shoes, ...result.data];
      setShoes(newShoes);
    })
    .catch(()=>{
      // 로딩 중 UI 안보이게하기
      console.log('fuck')
    })
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ShoeSop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
                Home
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
              
              <thingContext.Provider value={thing}> 
              {/* value={공유 원하는 값} */}
              <div className="row">
                { 
                  // shoes.map(
                  //   shoe => (<Item title={shoe.title} content={shoe.content} img={shoe.img} price={shoe.price} key={shoe.id}/>)
                  // )
                  shoes.map(
                    (shoe, i) => (<Item shoes={shoes[i]} key={shoe.id}/>)
                  )
                  // shoes.map(
                  //   (shoe, i) => (<Item shoes={shoe}/>)
                  // )
                }
              </div>
              <button className="btn btn-primary" onClick={clickMore}>
                더 보기          
              </button>

              </thingContext.Provider>

            </div>
          </div>
        </Route>

          <Route path="/detail/:id">
            {/* ':작명'은 url 파리미터를 의미함. 즉 /모든문자 경로를 의미. 그러므로 현재있는 모든 url에서 아래의 코드가 다 보여진다. */}
            <thingContext.Provider value={thing}> 
              <Detail shoes={shoes}/>
            </thingContext.Provider>     
          </Route>
      </Switch>

    </div>
  )
}

function Item({shoes}) {

  return (
    <div className="col-md-4">
      <img src={shoes.img} alt="img" width="100%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <p>{shoes.price}</p>
      <Thing/>
    </div>
  )
}

function Thing() {
  let thing = useContext(thingContext);

  return <p>{thing}</p>
}

export default App;
