import { useState } from "react"
import { RoundCelebration } from "./RoundCelebration"

export const RoundThreeWinnerDisplay = (props) =>{
    
    const [celebration,setCelebrationStatus] = useState(false);
    const winnerHandler = () =>{
        setCelebrationStatus(true);
    }
    return (
        <div className = "r3-mrgn">
           
            <button className="r3-btn js-confetti" onClick = {winnerHandler}>
            Winner is {props.winner}
            {celebration && <RoundCelebration/>}
            </button>
            
        </div>
    )
}