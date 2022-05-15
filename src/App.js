import './App.css';
import Navbar from './compontents/navbar/Navbar';
import Sidebar from './compontents/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Sidebar/>
        <div className='others'>Dashboard Content</div>
      </div>
    </div>
  );
}

export default App;
