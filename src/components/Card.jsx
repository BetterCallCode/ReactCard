const Card = ({elem, idx, deleteHandler}) => {
  return (
    <div className='cards'>
        <div onClick={()=>{deleteHandler(idx)}} className="remove" title="Remove">x</div>
        <img src={elem.userImage} alt="" />
        <h2>{elem.userName}</h2>
        <p>{elem.userDesc}</p>
        <button className='follow'>Follow</button>
    </div>
  )
}

export default Card;