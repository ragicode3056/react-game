import { HomePage } from "./homePage/HomePage"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { RoundOne } from "./Round1/RoundOne";
import { RoundTwo } from "./Round2/RoundTwo";
import { RoundThree } from "./Round3/RoundThree";


export const Game = () =>{
    return (
       <div>
           <BrowserRouter>
            
                <Routes>
                    <Route path = '/' element = {<HomePage/>}></Route>
                    <Route path = '/r1' element = {<RoundOne/>}> </Route>
                    <Route path = '/r2' element = {<RoundTwo/>}></Route>
                    <Route path = '/r3' element = {<RoundThree/>}></Route>
                </Routes>
           </BrowserRouter>
       </div>
        
       
    )
}