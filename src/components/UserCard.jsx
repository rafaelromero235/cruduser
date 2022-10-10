import React from 'react'
import './styles/userCard.css'

const UserCard = ({user,deleteUserById,setupdateInfo,setformIsclosed}) => {
 
 const handleEdit = ()=>{

    setupdateInfo(user)
    setformIsclosed(false)
 }

    return (
    <article className='user'>
        <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user__list'>
            <li className='user__item'><span className='user__span'>email</span>{user.email}</li>
           
            <li className='user__item'><span className='user__span'>birthday</span>
            <div className='user__item-container'>
              <i className=" user__gift fa-solid fa-gift"></i>{user.birthday}
            </div>
            
            </li>
        </ul>
        <footer className='user__footer'>

          <button className='user__btn' onClick={()=>deleteUserById(user.id)}> 
        <i className="user__trash fa-solid fa-trash-can"></i>
           </button>
           <button className='user__btn'  onClick={handleEdit}>
        <i className=" user__edit fa-solid fa-pen-to-square"></i>
            </button>
        </footer>
    </article>
  )
}

export default UserCard