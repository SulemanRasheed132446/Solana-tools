"use client"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React, { useMemo } from 'react'
import categories from '../../../data/categories'
import Image from 'next/image'
import { IProject } from '../../../data/categories/all'

const Guides = () => {

  const popular = useMemo(() => {
    return categories.flatMap(category => category.projects).filter(project => project.popular)
  }, [])
  return (
    <div className='px-[10%]'>
      <div className="relative">
        <div className="min-w-screen min-h-[50vh] spiral block relative -top-[20vh]">
        </div>
        <div className="w-full  text-white text-center text-sm flex flex-col items-center absolute top-0">
          <p className="mt-[10%] bg-[#ffffff14] w-fit m-auto px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl">Support Us and Help Us Grow! Your Backing Means Everything! 🤩</p>
          <h1 className="mt-10 text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-[50%]"> Guides
          </h1>
          <h2 className="text-[#abadaf] mt-5 text-xl w-5/12">Your Ultimate guide for the Latest Solana Tools and dapps</h2>
        </div>
      </div>

      <div className="mt-[5%] block flex relative text-white w-full   bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-xl p-12 shadow-xl">
        <div className='w-9/12'>
          <p className="border-[1px] border-solid text-xs w-fit px-4 py-1 text-[#d3bef4] border-[#8952e0] rounded-xl">Guides</p>
          <p className="text-4xl font-bold mt-4">Everything You Need to Trade Tokens on Solana</p>
          <p className="text-[#abadaf] text-sm mt-2 "> Step-by-Step Guide for Beginners</p>
          <p className="text-[#abadaf] text-sm mt-2 ">In this guide, you’ll find all the essential tools to start trading on the Solana blockchain. It covers everything from creating your wallet to using trading bots and discovering new Solana tools. This guide is designed with beginners in mind, ensuring that each concept is easy to understand and accessible.</p>
          <Button className="mt-3 bg-[#8952e0] mt-6">Explore our guides <span><ArrowRight /></span></Button>
        </div>
      </div>

      <Guide title='Popular Guides' projects={popular} />
      <Guide title='Tool Guides' projects={popular} />
      <Guide title='Airdrop Guides' projects={popular} />
      <Guide title='All Guides' projects={popular} />
    </div>
  )
}

export default Guides

interface Props {
  title: string,
  projects: IProject[]
}
 const Guide: React.FC<Props> = ({ projects, title }) => {
  return <div className='mt-[10%]'>
    <p className='text-white text-3xl font-bold'>{title}</p>
    <div className='flex mt-10 gap-4 flex-wrap'>
      {projects.map(project => <a key={project.name} href="" className="relative text-white w-[32%] shadow-[#8952e0]/10  flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6  shadow-xl">
        <Image src={project.logo} className="rounded-[50%]" alt="" width={50} height={50} />
        <p className="ml-4 font-bold">How to get started with {project.name}?</p>
      </a>)}
    </div>
  </div>
}