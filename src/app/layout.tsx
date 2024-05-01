import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react';
export const metadata = {
  title: 'Babylon',
  description: 'Knowleghe is power',
}


const inter = Inter({ subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang='en' 
      className={cn('bg-white text-slate-900 antialiased light',
      inter.className
    )}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <Navbar />
        <div className='container max-w-7x1 mx-auto h-full pt-12'>
          {children}
        </div>
      </body>
    </html>
  )
}
