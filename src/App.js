import logo from './logo.svg';
import './App.css';
import Social from './Social';
import Colton from './Colton';
import background from './IMAGES/bg-pattern-top-mobile.svg'
import backgroundbottom from './IMAGES/bg-pattern-bottom-mobile.svg'


function App() {
  return (
   <div className='background' style={{backgroundImage:`url(${background})` }}>
    <div className='background' style={{backgroundImage:`url(${backgroundbottom})` }}></div>
      
    <Social/>
    <Colton/>

   </div>
  );
}

export default App;
