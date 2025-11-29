import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rotate from './Rotate';


import letter from '/graduated_letter.png';
import music from '/music.mp3';
import cloud1 from '/cloud_1.png';
import cloud2 from '/cloud_2.png';


class App extends React.Component {
  constructor(){
    super();
    this.state = { count: 0 };
    this.audio = new Audio(music);
    // this.startPlayback = this.startPlayback.bind(this);
    this.handleFirstInteraction = this.handleFirstInteraction.bind(this);
  }

  componentDidMount() {
    this.audio.loop = true;
    this.audio.volume = 0.8;

    // Try autoplay; if blocked, wait for user interaction
    this.audio.play()
      .then(() => this.setState({ playing: true }))
      .catch(() => {
        document.addEventListener('click', this.handleFirstInteraction, { once: true });
      });
  }


  handleFirstInteraction() {
    this.audio.play().then(() => this.setState({ playing: true })).catch(()=>{});
  }


  render() {
    const audio = new Audio("/music.mp3");
    audio.play();
    return (
        <>
          <Rotate />
          <div className='box_container'>
            <img src={letter} className='letter'></img>
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
            <div>
              <img src={cloud1} className="cloud_1" alt="cloud image" />
              <img src={cloud2} className="cloud_2" alt="cloud image" />
            </div>
            
            <div className='location'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.0563685922393!2d106.79989495690981!3d10.874858822743935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a69462af35%3A0x732e8e6f23fe9fef!2zTMawdSBI4buvdSBQaMaw4bubYywgxJDDtG5nIEjDsmEsIETEqSBBbiwgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1764351147695!5m2!1svi!2s" width="80%" height="10%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
          </div>
        </>
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
