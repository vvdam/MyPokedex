import "./PokemonCard.css";



function State(props){
    console.log(props, props.props.types)
    return(
        <div  className="state"> 
            <h2>{props.props.types}</h2>
            <p className="hp">HP: {props.props.hp} </p> 
            <div><p className="att">ATT: {props.props.att} </p> <p className="def">DEF: {props.props.def} </p> </div>
        </div>
    )
} 

export default State;
