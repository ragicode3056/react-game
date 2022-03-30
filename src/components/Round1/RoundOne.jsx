import { HomeHeader } from "../homePage/HomeHeader";
import { NavItems } from "../homePage/NavItems";
import { RoundOneGameCard } from "./RoundOneGameCard";
import r1Sample from '../imgs/r1-sample.png';
import r1Crispin from '../imgs/r1-crispin.png';
import r1Prabhu from  '../imgs/r1-prabhuj.png';
import r1Sankar from '../imgs/r1-sankar.png';
import r1Tausif from '../imgs/r1-tausif.png';
import r1Vignesh from '../imgs/r1-vignesh.png';

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