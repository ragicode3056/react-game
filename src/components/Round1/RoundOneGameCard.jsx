import { RoundOneTimer } from "./RoundOneTimer";
import { useState } from "react";


export const RoundOneGameCard = (props) =>{
    const [count,setCount] = useState(0);
    const countHandler = () =>{
        setCount(count + 1);

    }
    return (
        <div className="r1-main-div">
            <h3 className="r1-header"> Welcome {props.name}</h3>
            <div className = "contanier r1-contanier">
                <div className = "r1-row">
                    <div className = "r1-img-card">
                        <div className = "r1-pict-select">
                           <img src = {props.imgs} className="r1-img"></img>
                        </div>
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
                       Score {count}
                    </div>
                </div>
            </div>

        </div>
    )
}