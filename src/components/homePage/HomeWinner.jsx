import cardImg from '../imgs/img-banner.png';
import { HomeGameRule } from './HomeGameRules';
import { HomeLePlay } from './HomeLetPlay';
export const HomeWinner = () =>{
    return (
        <div className="card bg-dark text-white">
            <img className="card-img" src={cardImg} alt="Card image"/>
            <div className="card-img-overlay">
                <h5 className="card-title hm-card-title" >Who wins the hot seat?</h5>
                <p className="card-text hm-card-quotes">Whatever we believe about ourselves and our ability comes true for us.</p>
                <HomeLePlay/>
                <HomeGameRule/>
            </div>
        </div>
    )
}