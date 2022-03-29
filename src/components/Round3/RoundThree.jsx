import { HomeHeader } from "../homePage/HomeHeader";
import { NavItems } from "../homePage/NavItems";
import { RoundCelebration } from "./RoundCelebration";
import { RoundThreeHeader } from "./RoundThreeHeader";
import { RoundThreeSpinner } from "./RoundThreeSpinner";
export const RoundThree = () =>{
    return (
        <div>
             <HomeHeader/>
             <NavItems/>
             <RoundThreeHeader/>
             <RoundThreeSpinner/>
             <RoundCelebration/>
        </div>
       
    )
}