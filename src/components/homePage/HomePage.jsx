import { HomeGameRule } from "./HomeGameRules"
import { HomeHeader } from "./HomeHeader"
import { HomeLePlay } from "./HomeLetPlay"
import { HomeWinner } from "./HomeWinner"
import { NavItems } from "./NavItems"

export const HomePage = () =>{
    return (
        <div>
            <HomeHeader></HomeHeader>
            <NavItems></NavItems>
            <HomeWinner/>
        </div>
       
    )
}