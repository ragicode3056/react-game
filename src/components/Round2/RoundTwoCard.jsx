import r2 from '../imgs/r2.png';
export const RoundTwoCard = (props) =>{
    return (
        <div className = "r2-main-div">
            <div className = "r2-img-card">
               <img  className ="r2-img-card" src = {props.imgs}></img>
            </div>
            <div className = "r2-img-card-qsn">
                <div className = "r2-qsns">
                   {props.qsn}
                </div>
            </div>
            <div className="r2-view-answer-card">
                <div className = "r2-view-ans">
                    <div className='r2-view-ans-btn' onClick = {props.onclick}>
                      {props.ans}
                    </div>
                </div>
            </div>
        </div>
    )
}