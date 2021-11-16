import React from 'react'
import SingUp from './SingUp'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container Classname='d-flex aling-items-center justity-content-center'
    style={{ minHeight: "100vh" }}
    >
    <div className='w-100' style={{ maxWidth: '400px' }}>
      <SingUp/>
    </div>
    </Container>
  );
}


export default App;
