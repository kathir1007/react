import './Card.css'

function Card(props){
    const classAttr = 'card '+props.className; 
    return <div className={classAttr}>{props.children}</div>
}

export default Card;