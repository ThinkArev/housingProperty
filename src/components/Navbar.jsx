import React from 'react'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname)
            return true
        console.log(route,' ' ,location)
        return false

    }


    return (
        <footer className='navbar' >
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate('/')}>
                        <ExploreIcon fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />  <p className={
                            pathMatchRoute('/') ? 'navbarListItemNameActive' :
                                'navbarListItemName'
                        }> Explore</p> </li>
                    <li className="navbarListItem" onClick={() => navigate('/profile')}>
                        <PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />  <p className={
                            pathMatchRoute('/profile') ? 'navbarListItemNameActive' :
                                'navbarListItemName'}> Person</p> </li>
                    <li className="navbarListItem" onClick={() => navigate('/offer')}>
                        <OfferIcon fill={pathMatchRoute('/offer') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />  <p className={
                            pathMatchRoute('/offer') ? 'navbarListItemNameActive' :
                                'navbarListItemName'}>offer</p> </li>
                </ul>
            </nav>
        </footer >
    )
}

export default Navbar
