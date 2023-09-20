import React from 'react'
import {ReactComponent as BellIcon} from '../../assets/bell.svg';
import {ReactComponent as MessageIcon} from '../../assets/messages.svg';
import Avatar from '../../assets/avatar.png'

const Header = ({headerText}) => {
  return (
    <header className="bg-white h-12 flex justify-between pl-3 pr-10 items-center">
          <h1>{headerText}</h1>
          <div className='flex items-center '> 
          <MessageIcon/>
          <BellIcon className='ml-4'/>
          <img src={Avatar} alt="" className='w-10 h-10 ml-10'/></div>
    </header>
  )
}

export default Header