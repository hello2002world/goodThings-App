import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Home() {
  return (
   <>
      <Nav.Item>
        <Nav.Link href="/">Child</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href='/form'>Form</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href='/user'>User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
   </>
  )
}

export default Home
