import { HomeHeader } from "../homePage/HomeHeader";
import { NavItems } from "../homePage/NavItems";
import { RoundSixCelebration } from "./RoundSixCelebration"
import { RoundSixContainerCard } from "./RoundSixContainerCard";
import { RoundSixHeader } from "./RoundSixHeader"

export const RoundSix = () =>{
    return(
        <div>
            <HomeHeader/>
             <NavItems/>
            <RoundSixHeader/>
            <RoundSixContainerCard/>
            <RoundSixCelebration/>
        </div>
    )
}