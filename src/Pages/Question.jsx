import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'
import HtmlCss from './HtmlCss'
import htmllogo from '../Assets/Html Css.png'
import jslogo from '../Assets/JavaScript-logo.png'
import reactlogo from '../Assets/react-logo.png'
import nodelogo from '../Assets/nodejs-logo.png'

function Question() {
  return (
    <div className='d-flex justify-content-between align-items-center container-fluid' style={{height:'600px'}}>
        <Link style={{textDecoration:'none'}} to={'/html-css'}>
            <div className="question-1">
                <h1  className='mt-5'>HTML & CSS</h1>
                <img style={{width:'200px'}} src={htmllogo} alt="" />
                <p>Questions</p>
            </div>
        </Link>
        <Link style={{textDecoration:'none'}}  to={'/javascript'}>
            <div className="question-1">
            <h1  className='mt-5'>JavaScript</h1>
            <img className='mt-4' style={{width:'90px'}} src={jslogo} alt="" />
            <p className='mt-4'>Questions</p>
            </div>
        </Link>
        <Link style={{textDecoration:'none'}}  to={'/react'}>
            <div className="question-2">
            <h1  className='mt-5'>REACT</h1>
            <img className='mt-4' style={{width:'100px'}} src={reactlogo} alt="" />
            <p className='mt-4'>Questions</p>
            </div>
        </Link>
        <Link style={{textDecoration:'none'}}  to={'/node'}>
            <div className="question-2">
            <h1  className='mt-5'>Node-Js</h1>
            <img className='mt-4' style={{width:'200px'}} src={nodelogo} alt="" />
            <p className='mt-5'>Questions</p>
            </div>
        </Link>

    </div>
  )
}

export default Question