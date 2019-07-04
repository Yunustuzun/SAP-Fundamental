import React from 'react';
import logo from './logo.svg';
import { Panel } from 'fundamental-react/Panel';
import { Button } from 'fundamental-react/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <Panel>
        <Panel.Header>
          <Panel.Head
            description="New Fundamental App"
            title="Fiori 3.0 with React"
          />
          <Panel.Actions>
            <Button
              compact
              glyph="add">
              Add Item
        </Button>
          </Panel.Actions>
        </Panel.Header>

        <Panel.Body>
          Open-source , New UI
        </Panel.Body>
      </Panel>
    </div>
  );
}

export default App; 
