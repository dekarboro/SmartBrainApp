import React, { Component } from 'react';
import Logo from '../components/Logo/Logo.js';
import Navigation from '../components/Navigation/Navigation.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition.js';
import SignIn from '../components/SignIn/SignIn.js';
import SignUp from '../components/SignUp/SignUp.js';
import Rank from '../components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600
      }
    }    
  }
}

const app = new Clarifai.App({
  apiKey: 'f33bfa1f031e40dbb252abda8902129b'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      coords: [],
      route: 'signIn',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const image = document.querySelector('#inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const coords = [];
    for (let b of data) { 
      const box = b.region_info.bounding_box;
      coords.push(
        {
          left: box.left_col * width,
          right: width - (box.right_col * width),
          top: box.top_row * height,
          bottom: height - (box.bottom_row * height)
        }
      );         
    }
    return coords;  
  }

  displayBox = (coords) => {
    this.setState({coords: coords});
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  onBtnDetect = () => {
    const { input } = this.state;
    this.setState({imageUrl: input})
    console.log('submit');
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(response => {        
        const data = this.calculateFaceLocation(response.outputs[0].data.regions);
        this.displayBox(data);
      })
      .catch( err => console.log(err)
    );
  }
 
  onRouteChange = (route) => {
    if (route === 'signOut') {
      this.setState({isSignedIn: false});
      route = 'signIn';
    }
    else if (route === 'home') 
      this.setState({isSignedIn: true});    
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, coords} = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        { route === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onBtnDetect={this.onBtnDetect}
              />
              <FaceRecognition coords={coords} imageUrl={imageUrl} />
            </div>
          : (
            route === 'signIn'
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <SignUp onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;
