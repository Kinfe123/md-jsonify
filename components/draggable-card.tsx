/* eslint-disable tailwindcss/classnames-order */
'use client'
import Link from "next/link"
import React, { useRef, useState } from 'react';
import {motion} from 'framer-motion'
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  layoutId: any,
  className: any,
  draggable: boolean,
  title: string,
  disabled; boolean,
  onDragStart: () => void,

}

export function DraggableCard({
  className,
  draggable,
  layoutId,
  title,
 onDragStart,
 disabled=false,
  ...props
}: CardProps) {

  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <div
    ref={divRef}
    onMouseMove={handleMouseMove}
    onFocus={handleFocus}
    onBlur={handleBlur}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-xl font-urban bg-gradient-to-tr from-neutral-900 to-neutral-800/80 border p-6 shadow-xl transition-shadow hover:shadow-lg",
        !disabled && " opacity-60",
        className
      )}
      {...props}
    >
    <div
        className='pointer-events-none rounded-xl absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <div 
         className="flex flex-col -inset-px transition duration-300 justify-between space-y-4 ">
        <div className="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-muted-foreground">
        <motion.div
                    layout
                    layoutId={layoutId}
                    draggable={draggable}
                    onDragStart={onDragStart}
                    className={cn(className)}
                >
                     <p className="text-sm text-neutral-100">{title}</p>
                </motion.div>
        </div>
      </div>
    
    </div>
  )
}


