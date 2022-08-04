import Image from 'next/image'
import OrangeSlice from '../assets/orange-svgrepo-com.svg';
import Button from '../components/atoms/Button'
export default function Home() {
  return (
    <div className='h-screen w-screen flex items-center bg-white'>
      <div className='w-1/3'>
        <div className='flex items-center justify-center flex h-fit w-full xl:animate-slide-in'>
          <Image src = {OrangeSlice}/>
          <h1 className='self-center text-8xl mt-10'>Porto</h1>
        </div>
      </div>
      <div className='bg-div-separator w-1/3'>

      </div>
      <div className='w-full bg-primary h-full flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col'>
          <Button modifiers='w-96 h-16 text-3xl mt-10' type='alternate'> Continue to Website</Button>
          <Button modifiers='w-96 h-16 text-3xl mt-10' type='alternate'> Contact Me </Button>
        </div>
      </div>
    </div>
   
  )
}
