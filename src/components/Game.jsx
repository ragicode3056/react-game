import { HomePage } from "./homePage/HomePage"
import {Route,Routes} from 'react-router-dom';
import { RoundOne } from "./Round1/RoundOne";
import { RoundTwo } from "./Round2/RoundTwo";


export const Game = () =>{
    return (
        // <Routes>
        //     <Route path = '/' element = {<HomePage/>} />
        //     {/* <Route path = '/r1' element = {<RoundOne/>}/> */}
        // </Routes>
      
        <div>
            {/* <HomePage/> */}
            {/* <RoundOne/> */}
            <RoundTwo/>
        </div>
        
       
    )
}