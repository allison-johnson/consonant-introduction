import React, { Component } from 'react'
import GridLayout from 'react-grid-layout'

//Symbol Pics
import Ae from './images/symbols/aeResized.jpg'
import A from './images/symbols/aResized.jpg'
import Au from './images/symbols/auResized.jpg'
import Aw from './images/symbols/awResized.jpg'
import B from './images/symbols/bResized.jpg'
import Ch from './images/symbols/chResized.jpg'
import C from './images/symbols/cResized.jpg'
import D from './images/symbols/dResized.jpg'
import Ear from './images/symbols/earResized.jpg'
import Ee from './images/symbols/eeResized.jpg'
import E from './images/symbols/eResized.jpg'
import F from './images/symbols/fResized.jpg'
import G from './images/symbols/gResized.jpg'
import H from './images/symbols/hResized.jpg'
import Ie from './images/symbols/ieResized.jpg'
import I from './images/symbols/iResized.jpg'
import J from './images/symbols/jResized.jpg'
import K from './images/symbols/kResized.jpg'
import L from './images/symbols/lResized.jpg'
import M from './images/symbols/mResized.jpg'
import Ng from './images/symbols/ngResized.jpg'
import Nose from './images/symbols/noseResized.jpg'
import N from './images/symbols/nResized.jpg'
import Oe from './images/symbols/oeResized.jpg'
import Oi from './images/symbols/oiResized.jpg'
import OoSymbolOne from './images/symbols/ooSymbolOneResized.jpg'
import OoSymbolTwo from './images/symbols/ooSymbolTwoResized.jpg'
import O from './images/symbols/oResized.jpg'
import Ou from './images/symbols/ouResized.jpg'
import Ow from './images/symbols/owResized.jpg'
import P from './images/symbols/pResized.jpg'
import Qu from './images/symbols/quResized.jpg'
import R from './images/symbols/rResized.jpg'
import Sh from './images/symbols/shResized.jpg'
import S from './images/symbols/sResized.jpg'
import ThNoisy from './images/symbols/thNoisyResized.jpg'
import Th from './images/symbols/thResized.jpg'
import T from './images/symbols/tResized.jpg'
import U from './images/symbols/uResized.jpg'
import V from './images/symbols/vResized.jpg'
import Wh from './images/symbols/whResized.jpg'
import W from './images/symbols/wResized.jpg'
import X from './images/symbols/xResized.jpg'
import Y from './images/symbols/yResized.jpg'
import Zh from './images/symbols/zhResized.jpg'
import Z from './images/symbols/zResized.jpg'

class Symbols extends Component {
  render() {
    const layout = [
        {i: 'p', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 1, h: 2, static: true},
        {i: 't', x: 0, y: 3, w: 1, h: 2, static: true},
        {i: 'd', x: 1, y: 3, w: 1, h: 2, static: true},
        {i: 'k', x: 0, y: 6, w: 1, h: 2, static: true},
        {i: 'g', x: 1, y: 6, w: 1, h: 2, static: true},
        {i: 'm', x: 2, y: 6, w: 1, h: 2, static: true},
        {i: 'n', x: 3, y: 6, w: 1, h: 2, static: true},
        {i: 'ng', x: 4, y: 6, w: 1, h: 2, static: true},
        {i: 'f', x: 0, y: 9, w: 1, h: 2, static: true},
        {i: 'v', x: 1, y: 9, w: 1, h: 2, static: true},
        {i: 'l', x: 2, y: 9, w: 1, h: 2, static: true},
        {i: 'r', x: 3, y: 9, w: 1, h: 2, static: true},
        {i: 'th', x: 0, y: 12, w: 1, h: 2, static: true},
        {i: 'thNoisy', x: 1, y: 12, w: 1, h: 2, static: true},
        {i: 'w', x: 2, y: 12, w: 1, h: 2, static: true},
        {i: 'h', x: 3, y: 12, w: 1, h: 2, static: true},
        {i: 'wh', x: 4, y: 12, w: 1, h: 2, static: true},
        {i: 's', x: 0, y: 15, w: 1, h: 2, static: true},
        {i: 'z', x: 1, y: 15, w: 1, h: 2, static: true},
        {i: 'sh', x: 0, y: 18, w: 1, h: 2, static: true},
        {i: 'zh', x: 1, y: 18, w: 1, h: 2, static: true},
        {i: 'ch', x: 0, y: 21, w: 1, h: 2, static: true},
        {i: 'j', x: 1, y: 21, w: 1, h: 2, static: true}
    ];

    return (
      <div className="symbols">
        <GridLayout className="layout" layout={layout} cols={5} rowHeight={20} width={200}>
          <div key="p" className="symbol"><img src={P} alt="P"></img></div>
          <div key="b" className="symbol"><img src={B} alt="B"></img></div>
          <div key="t" className="symbol"><img src={T} alt="T"></img></div>
          <div key="d" className="symbol"><img src={D} alt="D"></img></div>
          <div key="k" className="symbol"><img src={K} alt="K"></img></div>
          <div key="g" className="symbol"><img src={G} alt="G"></img></div>
          <div key="m" className="symbol"><img src={M} alt="M"></img></div>
          <div key="n" className="symbol"><img src={N} alt="N"></img></div>
          <div key="ng" className="symbol"><img src={Ng} alt="Ng"></img></div>
          <div key="f" className="symbol"><img src={F} alt="F"></img></div>
          <div key="v" className="symbol"><img src={V} alt="V"></img></div>
          <div key="l" className="symbol"><img src={L} alt="L"></img></div>
          <div key="r" className="symbol"><img src={R} alt="R"></img></div>
          <div key="th" className="symbol"><img src={Th} alt="Th"></img></div>
          <div key="thNoisy" className="symbol"><img src={ThNoisy} alt="ThNoisy"></img></div>
          <div key="w" className="symbol"><img src={W} alt="W"></img></div>
          <div key="h" className="symbol"><img src={H} alt="H"></img></div>
          <div key="wh" className="symbol"><img src={Wh} alt="Wh"></img></div>
          <div key="s" className="symbol"><img src={S} alt="S"></img></div>
          <div key="z" className="symbol"><img src={Z} alt="Z"></img></div>
          <div key="sh" className="symbol"><img src={Sh} alt="Sh"></img></div>
          <div key="zh" className="symbol"><img src={Zh} alt="Zh"></img></div>
          <div key="ch" className="symbol"><img src={Ch} alt="Ch"></img></div>
          <div key="j" className="symbol"><img src={J} alt="J"></img></div>
        </GridLayout>
      </div>
    )
  }
}

export default Symbols
