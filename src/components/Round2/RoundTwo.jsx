import { HomeHeader } from "../homePage/HomeHeader";
import { NavItems } from "../homePage/NavItems";
import { RoundTwoCard } from "./RoundTwoCard";
import { RoundTwoHeader } from "./RoundTwoHeader";
import r2Sample from '../imgs/r1-sample.png';
import r2OneI from '../imgs/r1-crsipin.png';
import r2TwoI from '../imgs/r1-3.png';
import r2ThreeI from '../imgs/r1-4.png';
import r2FourI from '../imgs/r1-5.png';

export const RoundTwo = () =>{
    let sampleQsn = "Sample Qsn 1";
    let r2One = "1st qsn";
    let r2Two = "2nd qsn";
    let r2Three = "3rd qsn";
    let r2Four = "4th qsn";
   
    return (
        <div>
            <HomeHeader/>
           <NavItems/>
           <RoundTwoHeader/>
           <RoundTwoCard imgs = {r2Sample} qsn = {sampleQsn}/>
           <RoundTwoCard imgs = {r2OneI} qsn = {r2One}/>
           <RoundTwoCard imgs = {r2TwoI} qsn = {r2Two}/>
           <RoundTwoCard imgs = {r2ThreeI} qsn = {r2Three}/>
           <RoundTwoCard imgs = {r2FourI} qsn = {r2Four}/>
         </div>
    )
}