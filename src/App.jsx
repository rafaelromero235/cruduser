import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {
  const [users, setusers] = useState()

  const [updateInfo, setupdateInfo] = useState()
  const [formIsclosed, setformIsclosed] = useState(true)

  const baseurl = 'https://users-crud1.herokuapp.com/'

  const getAllUser =()=>{
    const URL = `${baseurl}users/`
   
    axios.get(URL)
    .then(res=>setusers(res.data))
    .catch(err=>console.log(err))


  }
 
  useEffect(()=>{
   getAllUser()
  },[])


//create usuarui
  const crateNewUser = (data)=>{

    const URL = `${baseurl}users/`
    axios.post(URL,data)
    .then(res=>{
      console.log(res.data)
      getAllUser()})
    .catch(err=>console.log(err))
  }
    console.log(users)

    //eliminar usuario por id
const deleteUserById =(id)=>{
const URL = `${baseurl}users/${id}/`
axios.delete(URL)
.then(res=>{
  console.log(res.data)
  getAllUser()
})
.catch(err=>console.log(err))

}

const updateUserById=(id,data)=>{
  const URL = `${baseurl}users/${id}/`
  axios.patch(URL,data)
  .then(res=>{console.log(res.data)
               getAllUser()
               setupdateInfo()
  })
  .catch(err=>console.log(err))

}
const handleOpenForm =()=>{
  setformIsclosed(false)
}


  return (
    
    <div className="App">
      <div className='app__container-title'>
      <h1 className='app__title'>user crud</h1>
      <button onClick={handleOpenForm} className='app__btn'>create a new user</button>

      </div>
     <div className={`form__padre ${ formIsclosed && `disable__form`}`}>
      <FormUsers 
      updateUserById={updateUserById}
      updateInfo={updateInfo}
      crateNewUser={crateNewUser}
      setupdateInfo={setupdateInfo}
      handleOpenForm={handleOpenForm}
      setformIsclosed={setformIsclosed}
      />

     </div>
      <div className='users__container'>
      {
        users?.map(user=>(
          <UserCard 

          setupdateInfo={setupdateInfo}
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setformIsclosed={setformIsclosed}
          
          />
        ))
      }


      </div>


    </div>
  )
}

export default App
