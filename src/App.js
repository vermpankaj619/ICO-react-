 import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Button from '@material-ui/core/Button';
import Start from './components/Start';
import About from './components/About';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Whitepaper from './components/Whitepaper';
import Contribute from './components/Contribute';
//import web3 from './web3'
//import ico from './ethereum/ico'
//import { Icon } from '@material-ui/core';

class App extends Component {
  render() {
   // console.log(web3.version);
    return (
      <div>
        <nav>

          <a href="/" class="titleICO">
            <i class="material-icons">group_work</i>
            <div>DEMOICO</div>
          </a>
      
          <div class="middleNav">
            <a onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500})}><Button>About</Button></a>
            <a onClick={() => scrollToComponent(this.Whitepaper, { offset: -70, align: 'top', duration: 1500})}><Button>Whitepaper</Button></a>
            <a onClick={() => scrollToComponent(this.Roadmap, { offset: -70, align: 'top', duration: 1500})}><Button>Roadmap</Button></a>
            <a onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}><Button>Contribute</Button></a>
            <a onClick={() => scrollToComponent(this.Team, { offset: -70, align: 'top', duration: 1500})}><Button>Team</Button></a>
          </div>

          <div class="rightNav">
            <i class="material-icons">account_box</i>

            <div class="myAccountBox">
              <div class="address"> Address: 0x47d8e19Ab54CED9d4Afc7C5519C6481C3D893d8d </div>
              <div class="eth"> ETH: 12 </div>
              <div class="dctoken"> My DC: 1223 </div>
            </div>
          </div>

        </nav>

        <div id="startDiv"> <Start/> </div>
        <div ref={(section) => { this.About = section; }}><About/></div>
        <div ref={(section) => { this.Whitepaper = section; }}> <Whitepaper/> </div>
        <div ref={(section) => { this.Roadmap = section; }}> <Roadmap/> </div>
        <div ref={(section) => { this.Contribute = section; }}> <Contribute/> </div>
        <div ref={(section) => { this.Team = section; }}> <Team/> </div>

      </div>
    );
  }
}
export default App;
