import { Link } from "react-router-dom";
import Hero from "../layout/Hero";

const Landing = () => {
  return (
    <div className='bg-[#ffffff] font-lora min-h-screen'>
      <div className='container px-4 py-8 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex items-center'>
            <div className='max-w-[450px] space-y-4'>
              <p className='text-black'>
                Starting At <span className='font-bold'>$22</span>
              </p>
              <h2 className='text-black font-bold text-4xl md:text-5xl'>
                The best collection 2024
              </h2>
              <h3 className='text-2xl'>
                Exclusive offer <span className='text-red-600'>-10%</span> off
                this week
              </h3>
              <Link
                to='/home'
                data-test='hero-btn'
                className='inline-block bg-blue-500 rounded-md px-6 py-3 hover:bg-blue-200 hover:text-black'
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className='flex justify-center'>
            <img
              src='https://img.freepik.com/premium-vector/cute-shopping-girl-cartoon-illustration_274619-1042.jpg'
              alt='hero'
              className='w-full md:max-w-[450px] '
            />
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
}

export default Landing;
