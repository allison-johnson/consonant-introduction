import React, { Component } from 'react'
import GridLayout from 'react-grid-layout'

class Workspace extends Component {
  render() {
    const layout = [
        {i: 'workspace', x: 3, y: 0, w: 5, h: 12, static: true}
    ];

    return (
      <div className="work-space">
        <GridLayout className="layout" layout={layout} cols={5} rowHeight={48} width={1200}>
          <div key="workspace" className="workspace" style={{'text-align': 'center'}}>
            <h2 style={{'margin-top': '-10px'}}>Work Mat</h2>
          </div>
        </GridLayout>
      </div>
    )
  }
}

export default Workspace
