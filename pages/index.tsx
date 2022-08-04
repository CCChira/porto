import Image from 'next/image'
import OrangeSlice from '../assets/orange-svgrepo-com.svg';
import Button from '../components/atoms/Button'
import Wave from '../assets/wave.svg';
export default function Home() {
  return (
    <div className='h-screen w-screen flex items-center bg-white'>
      <div className='w-1/2 h-full flex items-center relative'>
        <div className='flex items-center justify-center flex h-fit w-full xl:animate-slide-in'>
          <Image src = {OrangeSlice}/>
          <h1 className='self-center text-8xl mt-10'>Porto</h1>
        </div>
      </div>
      <Image src = {Wave} className="absolute"/>
      <div className='w-1/2 p-12 bg-primary h-full flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col'>
          <Button modifiers='w-96 h-16 text-2xl mt-10' type='alternate'> Continue to Website</Button>
          <Button modifiers='w-96 h-16 text-2xl mt-10' type='alternate'> Contact Me </Button>
        </div>
      </div>
    </div>
   
  )
}
