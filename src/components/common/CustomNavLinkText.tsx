import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ICustomNavLinkTextProps {
  title: string;
}

const CustomNavLinkText: React.FC<ICustomNavLinkTextProps> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <p onClick={() => {navigate(`/${title.toLowerCase()}`)}} className='text-amber-50 text-[14px] cursor-pointer'>{title}</p>
  )
}

export default CustomNavLinkText;
