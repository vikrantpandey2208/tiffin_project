import React from 'react'
import './Error.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
    <div className='body'>
    <div className="error-page">
         <div className ="content">
            <h2 className ="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you&apos;re looking for doesn&apos;t exist. 
            </p>
            <div className ="btns">
               <Link to='/'>return home</Link>
               
            </div>
         </div>
      </div>
    </div>

    </>
  )
}
