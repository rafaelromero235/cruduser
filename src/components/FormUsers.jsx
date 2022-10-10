import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formCard.css'



const FormUsers = ({ crateNewUser, getAllUser, updateInfo,setupdateInfo,updateUserById,handleOpenForm,setformIsclosed }) => {
    console.log(updateInfo)
    const objreset = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
    }

    useEffect(() => {
        if (updateInfo) {
           reset(updateInfo)
        }

    }, [updateInfo])


    const { handleSubmit, reset, register } = useForm()
    const submit = (data) => {

        if (updateInfo){

            updateUserById (updateInfo.id,data)
        }else{

            
            crateNewUser(data)
    
            
        }
        
        reset(objreset)
        handlecloseform(true)
    }

    const handlecloseform=()=>{
        setformIsclosed(true)
    }
    return (
        <form className='form__container' onSubmit={handleSubmit(submit)}>
           <i onClick={handlecloseform} className="form__x fa-solid fa-x"></i>
           <h2 className='form__title'>{ updateInfo ? 'update user' :'create user'}</h2>
            <div className='email__container'>
                <label className='email__label' htmlFor="Email">email:</label>
                <input className='email__input' id='email' type="email" {...register('email')} />
            </div>
            <div className=' password__container'>
                <label className='password__label' htmlFor="password">password:</label>
                <input className='password__input' id='password' type="password" {...register('password')} />
            </div>
            <div className='name__container'>
                <label className='name__label' htmlFor="first_name">Firstname:</label>
                <input className='name__input' id='first_name' type="text" {...register('first_name')} />
            </div>
            <div className='lastname__container'>
                <label className='lastname__label' htmlFor="last_name">lastname:</label>
                <input className='lastname__input' id='last_name' type="text" {...register('last_name')} />
            </div>
            <div className='birthday__container'>
                <label className='birthday__label' htmlFor="birthday">birthday:</label>
                <input className='birthday__input' id='birthday' type="date" {...register('birthday')} />
            </div>
            <button className='form__btn'> { updateInfo ? 'update' :'create'} </button>
        </form>
    )
}

export default FormUsers