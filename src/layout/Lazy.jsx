import Logo from '../assets/images/delsayo_white_bg_logo.png'

const Lazy = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <img alt='DELSAYO' src={Logo} className='h-24 md:h-32' />
        </div>
    )
  }
  
export default Lazy