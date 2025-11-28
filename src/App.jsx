import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import letter from '/graduated_letter.png';

class App extends React.Component {
  constructor(){
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
        <div className='box_container'>
          <img src={letter} ></img>
          <div className='form_data'>
            <form className='form_submit'>
              <div className='text_input'>Name</div>
              <textarea type="text" className='small_text'/>
              <div className='text_input'>Confirmation</div>
              <textarea type="text" className='small_text'/>
              <div className='text_input'>Your message</div>
              <textarea type="text" className='medium_text'/>
              <div></div>
              <input type="submit" className='button_submit'/>
            </form>
          </div>
          
        </div>
        // <>
        //   <div>
        //     <a href="https://vite.dev" target="_blank">
        //       <img src={viteLogo} className="logo" alt="Vite logo" />
        //     </a>
        //     <a href="https://react.dev" target="_blank">
        //       <img src={reactLogo} className="logo react" alt="React logo" />
        //     </a>
        //   </div>
        //   <h1>Vite + React</h1>
        //   <div className="card">
        //     {/* <button onClick={() => setCount((count) => count + 1)}>
        //       count is {count}
        //     </button> */}
        //     <p>
        //       Edit <code>src/App.jsx</code> and save to test HMR
        //     </p>
        //   </div>
        //   <p className="read-the-docs">
        //     Click on the Vite and React logos to learn more
        //   </p>
        // </>
    );
  }
  
  // return (
  
  // )
}

export default App
