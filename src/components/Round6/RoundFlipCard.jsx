
export const RoundFlipCard = (props) =>{
    return (
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={props.img} alt="Avatar" className="flip-img"/>
    </div>
    <div className="flip-card-back">
      <h1 className="r6-card-text"> {props.text}</h1>
    </div>
  </div>
</div>
    )
}