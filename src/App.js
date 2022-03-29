import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Game} from './components/Game';


function App() {
  return (
  <div>
    {/* <BrowserRouter>
      <Routes>
        <Route exact path = '/' element= {<HomePage/>}/>
    
      </Routes>
    </BrowserRouter> */}
    <Game/>
  
  </div>
  );
}

export default App;
