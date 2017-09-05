import React from 'react';
import {Link} from 'react-router-dom';

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      <Link to='/about/faq'>FAQ</Link>
      <Link to='/about/company'>Company</Link>
      {props.children}
    </div>
  )
}