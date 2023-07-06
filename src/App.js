import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textbox from './components/Textbox';

function App() {
  return (
    <>
      <Navbar title="TextUtils App"/>
      <div className="container my-3">
        <Textbox/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
