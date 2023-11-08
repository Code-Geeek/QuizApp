import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
    <div className="background-image d-flex justify-content-between align-items-center">
        <Row >
            <div className='col-4 ms-5' style={{height:'350px',width:'500px'}}>
                <h2 style={{height:'50px'}}>Quiz.it</h2>
                <p><span className='fs-bold text-primary'>Quiz.it</span>Exercise your brain with these basic quizzes. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti porro blanditiis ab minima atque doloremque quasi eaque incidunt. </p>
                <span>HTML & CSS <br /> JavaScript <br /> REACT <br />Node-Js</span><br />
                <Link to={"/questions"}><button className='btn btn-success mt-4'>Lets Start !</button></Link>
            </div>
        </Row>
    </div>
    </>
  )
}

export default Home