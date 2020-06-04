import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import GridLayout from 'react-grid-layout'
import MouthPics from './components/MouthPics'

// //Mouth Pics
// import LipPopper from './LipPopperResized.jpg'
// import Skinny from './SkinnyResized.jpg'
// import TipTapper from './TipTapperResized.jpg'
// import FatSound from './FatSoundResized.jpg'
// import TongueScraper from './TongueScraperResized.jpg'
// import FatPushedSound from './FatPushedSoundResized.jpg'
// import LipCooler from './LipCoolerResized.jpg'
// import TongueCooler from './TongueCoolerResized.jpg'
// import Nose from './NoseResized.jpg'
// import FrontLifter from './FrontLifterResized.jpg'
// import WindyPuff from './WindyPuffResized.jpg'


class App extends React.Component {
  render() {
    // const layout = [
    //   {i: 'lip-popper', x: 0, y: 0, w: 1, h: 2, static: true},
    //   {i: 'skinny', x: 1, y: 0, w: 1, h: 2, static: true},
    //   {i: 'tip-tapper', x: 0, y: 3, w: 1, h: 2, static: true},
    //   {i: 'fat-sound', x: 1, y: 3, w: 1, h: 2, static: true},
    //   {i: 'tongue-scraper', x: 0, y: 6, w: 1, h: 2, static: true},
    //   {i: 'fat-pushed-sound', x: 1, y: 6, w: 1, h: 2, static: true},
    //   {i: 'lip-cooler', x: 0, y: 9, w: 1, h: 2, static: true},
    //   {i: 'tongue-cooler', x: 1, y: 9, w: 1, h: 2, static: true},
    //   {i: 'nose', x: 0, y: 12, w: 1, h: 2, static: true},
    //   {i: 'front-lifter', x: 1, y: 12, w: 1, h: 2, static: true},
    //   {i: 'windy-puff', x: 0, y: 15, w: 1, h: 2, static: true}
    // ];
    return (
      <div className="consonant-grid">
        <MouthPics />
        {/* <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="lip-popper" className="mouth-pic"><img src={LipPopper}></img></div>
          <div key="skinny" className="mouth-pic"><img src={Skinny}></img></div>
          <div key="tip-tapper" className="mouth-pic"><img src={TipTapper}></img></div>
          <div key="fat-sound" className="mouth-pic"><img src={FatSound}></img></div>
          <div key="tongue-scraper" className="mouth-pic"><img src={TongueScraper}></img></div>
          <div key="fat-pushed-sound" className="mouth-pic"><img src={FatPushedSound}></img></div>
          <div key="lip-cooler" className="mouth-pic"><img src={LipCooler}></img></div>
          <div key="tongue-cooler" className="mouth-pic"><img src={TongueCooler}></img></div>
          <div key="nose" className="mouth-pic"><img src={Nose}></img></div>
          <div key="front-lifter" className="mouth-pic"><img src={FrontLifter}></img></div>
          <div key="windy-puff" className="mouth-pic"><img src={WindyPuff}></img></div>
        </GridLayout> */}
      </div>
    )
  }//render
}//App

export default App;
