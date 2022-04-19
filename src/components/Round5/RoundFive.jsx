import { HomeHeader } from "../homePage/HomeHeader";
import { NavItems } from "../homePage/NavItems";
import { RoundFiveCard } from "./RoundFiveCard";
import { RoundFiveHeader } from "./RoundFiveHeader";
import sampleLogicQsn from '../imgs/sampleLogic.png';
import FinalOne from '../imgs/final1.png';
import FinalTwo from '../imgs/final2.png';

export const RoundFive = () =>{
    return (
        <div>
            <HomeHeader/>
             <NavItems/>
             <RoundFiveHeader/>
             <RoundFiveCard img= {sampleLogicQsn} name="sample"/>
             <RoundFiveCard img= {FinalOne} name="Finalist 1"/>
             <RoundFiveCard img= {FinalTwo} name="Finalist 2"/>
        </div>
    )
}