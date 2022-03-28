import { HomeHeader } from "../homePage/HomeHeader";
import { NavItems } from "../homePage/NavItems";
import { RoundOneGameCard } from "./RoundOneGameCard";
import r1Sample from '../imgs/r1-sample.png';
import r1Crispin from '../imgs/r1-crsipin.png';
import r1Prabhu from '../imgs/r1-3.png';
import r1Sankar from '../imgs/r1-4.png';
import r1Tausif from '../imgs/r1-5.png';
import r1Vignesh from '../imgs/r1-6.png';

export const RoundOne = () =>{
    return(
        <div>
           <HomeHeader/>
           <NavItems/>
           <RoundOneGameCard name="Sample" imgs = {r1Sample}/>
           <RoundOneGameCard name="Crispin" imgs = {r1Crispin}/>
           <RoundOneGameCard name="Prabhu" imgs= {r1Prabhu}/>
           <RoundOneGameCard name="Sankar" imgs = {r1Sankar}/>
           <RoundOneGameCard name="Tausif" imgs = {r1Tausif}/>
           <RoundOneGameCard name="Vignesh" imgs = {r1Vignesh}/>
        </div>
    )
}