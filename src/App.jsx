import { useState } from "react"
import Card from "./components/Card"

const App = () => {

  const [userImage, setUserImage] = useState("")
  const [userName, setUserName] = useState("")
  const [userDesc, setUserDesc] = useState("")
  const localData = JSON.parse(localStorage.getItem('all-users')) || []  

  const [allUsers, setAllUsers] = useState(localData)

  const submitHandler=(e)=>{
    e.preventDefault()

    const oldUsers = [...allUsers]
    oldUsers.push({userImage, userName, userDesc});
    setAllUsers(oldUsers)
    localStorage.setItem('all-users', JSON.stringify(oldUsers))

    setUserImage("")
    setUserName("")
    setUserDesc("")
  }

  const deleteHandler=(idx)=>{
    const copyUsers = [...allUsers];
    copyUsers.splice(idx ,1)
    localStorage.setItem('all-users', JSON.stringify(copyUsers))
    setAllUsers(copyUsers)
  }

  return (
    <div className='main'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" onChange={(e)=>{setUserImage(e.target.value)}} title="image" required value={userImage} placeholder="Enter image URL" />

        <input type="text" onChange={(e)=>{setUserName(e.target.value)}} title="name" required value={userName} placeholder="Enter name" />

        <input type="text" onChange={(e)=>{setUserDesc(e.target.value)}} title="description" required value={userDesc} placeholder="Enter description" />

        <button className="submit">Create User</button>
      </form>

      <div className="hero-card">
        {allUsers.map((elem, idx)=>{
          return <Card key={idx} idx={idx} deleteHandler={deleteHandler} elem={elem}/>
        })}
      </div>
    </div>
  )
}

export default App