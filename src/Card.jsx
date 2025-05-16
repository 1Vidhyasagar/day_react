
const Card = (props) => {
  return (
    <div style={{border:"1px solid #ccc",padding:"1rem",margin:"1rem"}}>
    <h2>{props.name}</h2>
    <p>{props.role}</p>
</div>
    
  )
}

export default Card