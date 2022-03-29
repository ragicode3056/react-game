
export const RoundThreeWinnerDisplay = (props) =>{
    
    return (
        <div className = "r3-mrgn">
           
            <button className="r3-btn js-confetti">
            Winner is {props.winner}
            
            </button>
            
        </div>
    )
}