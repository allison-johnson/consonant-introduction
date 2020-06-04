import React from 'react';
import './App.css';
import GridLayout from 'react-grid-layout'
import MouthPics from './components/MouthPics'
import Workspace from './components/Workspace'
import Symbols from './components/Symbols'

class App extends React.Component {
  render() {
    const layout = [
      {i: 'mouth-pics', x: 0, y: 0, w: 2, h: 12, static: true},
      {i: 'workspace', x: 2, y: 0, w: 5, h: 12, static: true},
      {i: 'symbols', x: 7, y: 0, w: 5, h: 12, static: true}
    ];

    return (
      <div className="consonant-grid">
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={50} width={1200}>
          <div key="mouth-pics"><MouthPics /></div>
          <div key="workspace"><Workspace /></div>
          <div key="symbols"><Symbols /></div>
        </GridLayout>
      </div>
    )
  }//render
}//App

export default App;
