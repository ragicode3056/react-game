import { HomeHeader } from "../homePage/HomeHeader";
import { NavItems } from "../homePage/NavItems";
import { RoundOneGameCard } from "../Round1/RoundOneGameCard";
import { RoundFourCard } from "./RoundFourCard";
import { RoundFourHeader } from "./RoundFourHeader";
export const RoundFour = () =>{

    const sampleQsn = [
        "What technology is used to record cryptocurrency transactions? a) Digital wallet b) Mining c)  Blockchain d) Token",
        "What does acronym FOSS stand for? a) Free and Open-Source Software b) Full Option Sensor System c) Follow-On Support Service d) Fiber Optics Science System",
        "OFS stands for ?",
        "In which state Goa is present?",
        "What is the longest key in keyboard"
    ];
    const sampleItems = sampleQsn.map((i)=>{
       return <li className="r4-li">{i}</li>
    });

    // person 1
    const qsn1 = [
        'Where is the dish "kimchi" from? a) Korea b)China c)Japan d)England',
        'What is RajiniKanth latst released movie?',
        'What comes after letter A in Keybord?',
        'What is Windows latest version?',
        'Find Output - let a ; let b = a ?? "default"'
    ];
    const qsnOneItems = qsn1.map((i)=>{
        return <li  className="r4-li">{i}</li>
    }
    );

    //person 2
    const qsn2 = [
        "Which country consumes the most tea per person? China b)India c)Turkey d)Scotland",
        'What is KGF movie is based on?',
        'What comes after letter N in keyboard?',
        'What is Android latest version name or number?',
        'Find Output - const a =10; a = 3; print a'
    ]
    const qsnTwoItems = qsn2.map((i)=>{
        return <li  className="r4-li">{i}</li>
    })



    return (
        <div>
            <HomeHeader/>
             <NavItems/>
             <RoundFourHeader />
             <RoundFourCard name="Sample Qsns" listItems = {sampleItems}/>
             <RoundFourCard name = "Person A"listItems = {qsnOneItems}/>
             <RoundFourCard name = "Person B" listItems = {qsnTwoItems}/>
             
        </div>
    )
}