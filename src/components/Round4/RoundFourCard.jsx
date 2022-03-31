import { RoundOneTimer } from "../Round1/RoundOneTimer";
import { useState } from "react";
import { RoundFourTimer } from "./RoundFourTimer";
export const RoundFourCard = (props) =>{
    
    const numbers = [1,2,3,4,5];
  
       const listItems =  numbers.map((i)=>{
           return  <li>{i}</li>
        })
    
    return (
        <div className="r1-main-div">
            <h3 className="r1-header">  {props.name}</h3>
            <div className = "contanier r1-contanier">
                <div className = "r1-row">
                    <div className = "r4-img-card">
                        <ul className="r4-ul">
                            {/* <li>Qsn 1 </li>
                            <li>Qs 2 </li>
                            <li> Qs 3</li>
                            <li> Qsn 4</li>
                            <li>Qsn 5</li> */}
                            {props.listItems}
                        </ul>
                    </div>
                    <div className="r1-timer-card">
                        <div className="r1-timer">
                           <RoundFourTimer/>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}