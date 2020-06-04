import React, { Component } from 'react'
import GridLayout from 'react-grid-layout'

//Mouth Pics
import LipPopper from './images/mouthPics/LipPopperResized.jpg'
import Skinny from './images/mouthPics/SkinnyResized.jpg'
import TipTapper from './images/mouthPics/TipTapperResized.jpg'
import FatSound from './images/mouthPics/FatSoundResized.jpg'
import TongueScraper from './images/mouthPics/TongueScraperResized.jpg'
import FatPushedSound from './images/mouthPics/FatPushedSoundResized.jpg'
import LipCooler from './images/mouthPics/LipCoolerResized.jpg'
import TongueCooler from './images/mouthPics/TongueCoolerResized.jpg'
import Nose from './images/mouthPics/NoseResized.jpg'
import FrontLifter from './images/mouthPics/FrontLifterResized.jpg'
import WindyPuff from './images/mouthPics/WindyPuffResized.jpg'

class MouthPics extends Component {
  render() {

    const layout = [
        {i: 'lip-popper', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'skinny', x: 1, y: 0, w: 1, h: 2, static: true},
        {i: 'tip-tapper', x: 0, y: 3, w: 1, h: 2, static: true},
        {i: 'fat-sound', x: 1, y: 3, w: 1, h: 2, static: true},
        {i: 'tongue-scraper', x: 0, y: 6, w: 1, h: 2, static: true},
        {i: 'fat-pushed-sound', x: 1, y: 6, w: 1, h: 2, static: true},
        {i: 'lip-cooler', x: 0, y: 9, w: 1, h: 2, static: true},
        {i: 'tongue-cooler', x: 1, y: 9, w: 1, h: 2, static: true},
        {i: 'nose', x: 0, y: 12, w: 1, h: 2, static: true},
        {i: 'front-lifter', x: 1, y: 12, w: 1, h: 2, static: true},
        {i: 'windy-puff', x: 0, y: 15, w: 1, h: 2, static: true}
    ];

    return (
      <div className="mouth-pics">
        <GridLayout className="layout" layout={layout} cols={2} rowHeight={30} width={200}>
          <div key="lip-popper" className="mouth-pic"><img src={LipPopper} alt="Lip Popper"></img></div>
          <div key="skinny" className="mouth-pic"><img src={Skinny} alt="Skinny"></img></div>
          <div key="tip-tapper" className="mouth-pic"><img src={TipTapper} alt="Tip Tapper"></img></div>
          <div key="fat-sound" className="mouth-pic"><img src={FatSound} alt="Fat Sound"></img></div>
          <div key="tongue-scraper" className="mouth-pic"><img src={TongueScraper} alt="Tongue Scraper"></img></div>
          <div key="fat-pushed-sound" className="mouth-pic"><img src={FatPushedSound} alt="Fat Pushed Sound"></img></div>
          <div key="lip-cooler" className="mouth-pic"><img src={LipCooler} alt="Lip Cooler"></img></div>
          <div key="tongue-cooler" className="mouth-pic"><img src={TongueCooler} alt="Tongue Cooler"></img></div>
          <div key="nose" className="mouth-pic"><img src={Nose} alt="Nose"></img></div>
          <div key="front-lifter" className="mouth-pic"><img src={FrontLifter} alt="Front Lifter"></img></div>
          <div key="windy-puff" className="mouth-pic"><img src={WindyPuff} alt="Windy Puff"></img></div>
        </GridLayout>
      </div>
    )
  }//render
}//class MouthPics

export default MouthPics
