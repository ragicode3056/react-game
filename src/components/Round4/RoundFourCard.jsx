import { RoundOneTimer } from "../Round1/RoundOneTimer";
import { useState } from "react";
export const RoundFourCard = (props) =>{
    const [count,setCount] = useState(0);
    const countHandler = () =>{
        setCount(count + 1);

    }
    return (
        <div className="r1-main-div">
            <h3 className="r1-header">  {props.name}</h3>
            <div className = "contanier r1-contanier">
                <div className = "r1-row">
                    <div className = "r1-img-card">
                        <ul>
                            <li>Qsn 1 </li>
                            <li>Qs 2 </li>
                            <li> Qs 3</li>
                            <li> Qsn 4</li>
                            <li>Qsn 5</li>
                        </ul>
                    </div>
                    <div className="r1-timer-card">
                        <div className="r1-timer">
                            <RoundOneTimer/>
                        </div>
                    </div>
                    <div className="r1-increment-crad">
                        <div className="r1-increment" onClick = {countHandler}>
                            +
                        </div>
                    </div>
                    <div className="r1-count-card">
                        {count}
                    </div>
                </div>
            </div>

        </div>
    )
}