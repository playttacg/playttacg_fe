import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthLoadingScreen:React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div>AuthLoadingScreen</div>
  )
}

export default AuthLoadingScreen