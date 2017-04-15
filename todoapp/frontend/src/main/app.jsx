import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'

import React from 'react'
import Todo from "../todo/todo";
import About from "../about/about";

export default props => (
    <div className='container'>
        <Todo/>
        <About />
    </div>
)