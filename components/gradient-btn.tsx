/* eslint-disable tailwindcss/classnames-order */
import Link from 'next/link'
const GetStarted = () => {
    return (
      <button  className='relative hover:scale-[1.01] hover:transition-[100] transition-[300]  inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 '>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className='text-md inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-4 py-2 font-medium text-white backdrop-blur-3xl'>
         <Link href={'/docs'}>
          Get Started
         </Link>
         
        </span>
      </button>
    );
  };
  
  export default GetStarted;
  