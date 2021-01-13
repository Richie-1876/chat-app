import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {logout} from '../../../../store/actions/auth'
import './NavBar.scss'

const NavBar = () => {

    const dispatch =  useDispatch()
    const user = useSelector(state => state.authReducer.user)

    const [showProfileOptions, setShowProfileOptions] = useState(false)
    return (
        <div id='navbar' className='card-shadow'>
            <h2>Chat.io</h2>
            <div onClick={()=> setShowProfileOptions(!showProfileOptions)}id='profile-menu'>
                <img  width="40" height="40"src={user.avatar} alt='Avatar'/>
                <p>{user.firstName} {user.lastName}</p>
                <FontAwesomeIcon icon='caret-down' className='fa-icon'/>

                {
                    showProfileOptions && 
                    <div id='profile-options'>
                    <p>Update profile</p>
                    <p onClick={()=>dispatch(logout())}>Logout</p>
                </div>
                }
            </div>
        </div>
    )
}

export default NavBar