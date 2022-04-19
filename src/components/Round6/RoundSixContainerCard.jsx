import { RoundFlipCard } from "./RoundFlipCard"
import fun from '../imgs/fun.png';
import travel from '../imgs/travel.png';
import sursprise from '../imgs/surprise1.png';
export const RoundSixContainerCard = () =>{
    return(
        <div className="flip-card-container">
            <RoundFlipCard img = {fun} text = "Whom you like the most?"/>
            <RoundFlipCard img = {travel} text = "Where you like to travel and with whom?"/>
            <RoundFlipCard img = {sursprise} text = "For whom you want to give surprise and what is that?"/>
        </div>
    )
}