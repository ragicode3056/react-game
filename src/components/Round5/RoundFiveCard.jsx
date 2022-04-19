import { RoundFiveTimer } from "./RoundFiveTimer"

export const RoundFiveCard =(props) =>{
    return(
        <div className="r1-main-div">
        <h3 className="r1-header"> {props.name} </h3>
        <div className = "contanier r1-contanier">
            <div className = "r1-row">
                <div className = "r4-img-card">
                  <img src ={props.img} className="final-img"></img>
                </div>
                <div className="r1-timer-card">
                    <div className="r1-timer">
                      <RoundFiveTimer/>
                    </div>
                </div>
               
            </div>
        </div>
    
    </div>
    )
   
}