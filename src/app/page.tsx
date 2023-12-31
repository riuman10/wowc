"use client"
import Image from 'next/image'
import { useState } from 'react';
import Button from './components/Button';
import Panel from './components/Panel'
import NewPanel from './components/NewPanel';


export default function Home() {
  const [open , setOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => setOpen(!open)} title = {open ? "Close" : "Open"} />
      {
        open ? (
          <div className=''>
            <NewPanel />
          </div>
        ) : ""
      }
    </main>
  )
}
