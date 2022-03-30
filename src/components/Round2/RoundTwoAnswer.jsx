export const RoundTwoAnswer = (props) =>{
    return (
        <div className='r2-view-ans-btn' onClick = {props.answerHandler}>
                        {props.text}
        </div>
    )
}