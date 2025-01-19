import './App.scss'
import Conditional from './components/Conditional'
import List from './components/List'
import ShowName from './components/ShowName'
import ShowProduct from './components/ShowProduct'
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Accordion from 'react-bootstrap/Accordion';

import { Button, Alert, Accordion } from 'react-bootstrap';
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <button className="btn btn-primary">Click me</button>
      <Button variant="primary">Primary</Button>
      <Alert variant="danger">
        This is a "danger" alert with{' '}
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
        you like.
      </Alert>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <ShowProduct productDetails={{ name: "BMW", category: 'car', price: 3000000 }} >
        <h2> Product one </h2>
      </ShowProduct>
      <hr />
      <ShowProduct productDetails={{ name: "Mercedes", category: 'car', price: 43000000 }} >
        <h3>Product two</h3>
      </ShowProduct>
      <hr />
      <ShowProduct productDetails={{ name: "VOLVO", category: 'car', price: 3065000 }} />
      <hr />
      <ShowName />
      <hr />
      <Conditional />
      <hr />
      <List />
    </>
  )
}

export default App
