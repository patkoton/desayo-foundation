import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


export default function Button({ children, className }) {
  const navigate = useNavigate();

  function handleClick() {
    if (children === 'Donate') {
      navigate('/donate', {replace: true});
    } else if (children === 'Volunteer') {
      navigate('/volunteer', {replace: true});
    } else if (children === 'Learn More') {
      navigate('/more', {replace: true});
    } else {
      navigate('/', {replace: true})
    }
  }

  return (
    <button onClick={handleClick} className={`cursor-pointer border border-black outline-none transition-all py-2 + ${className}`}>
      <p className={`font-poppins text-base md:text-lg + ${className}`}>{children}</p>
    </button>
  )
}





