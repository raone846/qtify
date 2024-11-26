import './App.css';
import HeroSection from './component/HeroSection';
import Navbar from './component/Navbar';
import Section from './component/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      
      {/* Albums Sections */}
      <Section
        title="Top Albums"
        fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
        uniqueId="topAlbum"
      />
      <Section
        title="New Albums"
        fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
        uniqueId="newAlbum"
      />
      
      {/* Songs Section */}
      <Section
        title="Songs"
        fetchUrl="https://qtify-backend-labs.crio.do/songs"
        uniqueId="songsSection"
        isSongsSection={true} // Pass true to enable songs-specific behavior
      />
    </div>
  );
}

export default App;
