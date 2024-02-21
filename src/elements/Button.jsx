import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


export default function Button({ children, className }) {
  const navigate = useNavigate();

  function handleClick() {
    if (children === 'Donate') {
      navigate('/', {replace: true});
    } else if (children === 'Volunteer') {
      navigate('/', {replace: true});
    } else if (children === 'Learn More') {
      navigate('/', {replace: true});
    } else {
      navigate('/', {replace: true})
    }
  }

  return (
    <button onClick={handleClick} className={`cursor-pointer border border-purple outline-none transition-all py-2 + ${className}`}>
      <p className={`font-poppins text-base md:text-lg + ${className}`}>{children}</p>
    </button>
  )
}





