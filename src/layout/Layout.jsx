import { Fragment, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { FiYoutube, FiLinkedin } from "react-icons/fi";
// logo from '../assets/images/getlinked.png'
import '../App.css'
import Button from '../elements/Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Our Work', href: '/#work' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
]
const footer = [
    { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Our Work', href: '/#work' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
]
const icon = [
  { icon: <AiOutlineInstagram />, href: 'https://www.instagram.com/' },
  { icon: <FiFacebook />, href: 'https://web.facebook.com/' },
  { icon: <FaXTwitter />, href: 'https://www.twitter.com/' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/feed/' },
  { icon: <FiYoutube />, href: 'https://www.youtube.com/feed/' },
]

export default function Layout(props) {

  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
    {/* NAVBAR */}
    <Disclosure as="nav" className="bg-grey text-black sticky top-0 z-10 pt-5 md:pt-0 pb-5 md:pb-1 font-poppins">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-5 lg:mx-20">
            <div className="relative flex h-6 md:h-20 items-center justify-around">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black focus:rounded-full focus:p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3BottomRightIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to='/'>
                    <h1 className='text-2xl text-semibold text-black'>LOGO</h1>
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex justify-center items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Medium Device NavLinks */}
                <div className="hidden sm:block md:flex items-center md:space-x-12 lg:space-x-48">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive}) => {
                          return 'px-1 xl:px-2 py-2 rounded-md text-lg font-medium' +
                          (isActive ? 'bg-transparent text-black' : 'text-black')
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <div className='md:ml-10'>
                      <Button children='Donate' className='text-black font-medium px-4' />
                    </div>
                    <div className='md:ml-10'>
                      <Button children='Volunteer' className='text-black font-medium px-4' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* Small Device NavLinks */}
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive}) => {
                        return 'block px-3 py-2 rounded-md text-lg font-medium' +
                        (isActive ? 'bg-transparent text-black' : 'text-black')
                    }}
                    >
                        {item.name}
                </NavLink>
              ))}
              <div className='pl-2'>
                <Button children='Donate' className='text-black font-medium px-4' />
              </div>
              <div className='pl-2 pt-2'>
                <Button children='Volunteer' className='text-black font-medium px-4' />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className='bg-color1'>
        <div className='max-w-7xl min-h-screen px-5 md:px-10 lg:px-0'>
          {props.children}
        </div>
    </div>



    {/* FOOTER */}
    <footer className='bg-transparent text-black px-5 md:px-14 font-poppins py-5 md:py-10 '>
        <div className='flex flex-col md:flex-row md:justify-between md:items-start'>
          <div>
            <Link to='/'>
              <h1 className='text-xl md:text-2xl text-semibold'>LOGO</h1>
            </Link>
            <p className='text-sm md:text-base font-light md:w-96 mt-2.6'>Our organization is dedicated to making a positive impact in the community by providing support, resources, and opportunities for those in need. Through our compassionate and hope-restoring efforts, we aim to empower individuals and transform lives.</p>
            <h6 className='text-sm md:text-base font-medium mt-7'>Contact:</h6>
            <Link to='' className='text-sm md:text-base font-normal mt-2.5'>info@faithbasedngo</Link>
            <div className='flex gap-2 md:gap-3 mt-7'>
              {icon.map((item) => (
                <div className='flex items-center'>
                  <Link
                    to={item.href}
                    className=
                      'px-1 text-base md:text-lg text-black font-normal'
                  >
                    {item.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-row items-center mt-7 md:mt-0 gap-10'>
            <div className='flex flex-col'>
              {footer.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className=
                    'py-2 text-sm md:text-base text-black font-normal'
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className='flex flex-col'>
              {footer.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className=
                    'py-2 text-sm md:text-base text-black font-normal'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
    </footer>
    </>
  )
};
