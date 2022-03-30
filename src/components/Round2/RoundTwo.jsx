import { HomeHeader } from "../homePage/HomeHeader";
import { NavItems } from "../homePage/NavItems";
import { RoundTwoCard } from "./RoundTwoCard";
import { RoundTwoHeader } from "./RoundTwoHeader";
import r2Sample from '../imgs/veticanCity.png';
import r2OneI from '../imgs/infosys.png';
import r2TwoI from '../imgs/dubai.png';
import r2ThreeI from '../imgs/ukraineWar.png';
import r2FourI from '../imgs/ukraineWar.png';
import r2ExtraI from '../imgs/network.png'
import { useState } from "react";

export const RoundTwo = () =>{
    let sampleQsn = "Sample Qsn  - What is the smallest country in the world, based on landmass?";
    let r2One = "Qsn 1 - Who is the founder of Infosys?";
    let r2Two = "Qsn 2 -  Name of this place";
    let r2Three = "Qsn 3 - Who is he?";
    let r2Four = "Qsn 4 - Name of the series and character";
    let r2Extra = "Extra Qsn - Which mobile network launched Offers 500GB Data and Hotstar Premium Subscription?"
   
    const [sampleAns,setSampleAns] = useState("View Answer");
    const [r2_1Ans,set_r2_1_Ans] = useState("View Answer");
    const [r2_2Ans,set_r2_2_Ans] = useState("View Answer");
    const [r2_3Ans,set_r2_3_Ans] = useState("View Answer");
    const [r2_4Ans,set_r2_4_Ans] = useState("View Answer");
    const [r2_extraAns,setr2_extraAns] = useState("View Answer");

   const answerHandler = () =>{
       setSampleAns("Vetican City");
   }
   const answerHandler1 = () =>{
    set_r2_1_Ans("NR Narayana Murthy");
    }
    const answerHandler2 = () =>{
        set_r2_2_Ans("Dubai,Burj Khalifa");
    }
    const answerHandler3 = () =>{
        set_r2_3_Ans("Volodymyr Zelensky win");
    }
    const answerHandler4 = () =>{
        set_r2_4_Ans("netflix");
    }
    const answerHandler5 = () =>{
        setr2_extraAns("BSNL");
    }
    return (
        <div>
            <HomeHeader/>
           <NavItems/>
           <RoundTwoHeader/>
           <RoundTwoCard imgs = {r2Sample} qsn = {sampleQsn} ans = {sampleAns} onclick = {answerHandler}/>
           <RoundTwoCard imgs = {r2OneI} qsn = {r2One} ans = {r2_1Ans} onclick = {answerHandler1}/>
           <RoundTwoCard imgs = {r2TwoI} qsn = {r2Two} ans = {r2_2Ans} onclick = {answerHandler2}/>
           <RoundTwoCard imgs = {r2ThreeI} qsn = {r2Three} ans = {r2_3Ans} onclick = {answerHandler3}/>
           <RoundTwoCard imgs = {r2FourI} qsn = {r2Four} ans = {r2_4Ans} onclick = {answerHandler4}/>
           <RoundTwoCard imgs = {r2ExtraI} qsn = {r2Extra} ans = {r2_extraAns} onclick = {answerHandler5}/>
         </div>
    )
}