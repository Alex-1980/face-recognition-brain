import './App.css';
import ParticlesBg from 'particles-bg'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navagation/Navigation';
import Rank from './components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <ParticlesBg bg={true} color='#ffffff' num='450' type='cobweb' />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
