import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
    <div className="background-image d-flex justify-content-between align-items-center">
        <Row >
            <div className='col-4 ms-5' style={{height:'250px'}}>
                <h2 style={{height:'50px'}}>Quiz.it</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum veniam maiores quibusdam harum beatae commodi consequatur aut incidunt ab laborum! Ut reprehenderit facere itaque optio ex nulla quo ea.</p>
                <Link to={"/questions"}><button className='btn btn-success'>Lets Start !</button></Link>
            </div>
        </Row>
    </div>
    </>
  )
}

export default Home