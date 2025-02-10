import React from 'react'
import CustomNavLinkText from './CustomNavLinkText'
import { navBarPageNames } from '../../constants/constants'
import CGTTALogo from '../../assets/icons/logo.svg';

const NavBar:React.FC = () => {
  return (
    <div className='w-screen flex flex-row items-center justify-between'>
      <img src={CGTTALogo} alt='logo' className='ml-9 h-[43px] w-[53px] mt-4'/>
      <div className='flex flex-col items-center'>
        <div className='flex items-center my-4'>
          {navBarPageNames.map((item, index) => {
            return (
            <>
              <CustomNavLinkText title={item} />
              {index !== navBarPageNames.length - 1 && (<div className='h-[.15rem] w-[.15rem] bg-amber-50 rounded-full mx-3'/>)}
            </>
            )
          })}
        </div>
        <div className='w-[50vw] h-[.15rem] bg-gradient-to-r from-transparent via-emerald-900 to-transparent'/>
      </div>
      <div className='mr-12 text-xl font-bold text-amber-50'>CGTTA</div>
    </div>
  )
}

export default NavBar