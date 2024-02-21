// @ts-nocheck

import { cn } from '@/lib/utils'
import styles from './btn.module.css'
import Link from 'next/link'
const ProgressBtn = () => {
  return (
    <Link href={'/featured'}>
      <button className={cn(styles.button)}>
        <div className={cn(styles.text, 'font-heading text-black dark:text-white')}>
          <span>Explore</span>
          <span>Our</span>
          <span>Plans</span>
        </div>
        <div className={cn(styles.clone, 'font-heading text-black dark:text-white')}>
          <span>Track</span>
          <span>Our</span>
          <span>Progress</span>
        </div>
        <svg
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-black dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
    </Link>

  )
}

export default ProgressBtn