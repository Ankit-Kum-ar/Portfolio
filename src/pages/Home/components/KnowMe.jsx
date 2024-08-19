import React from 'react'
import KnowMeCard from './KnowMeCard'
import avatar from "../../../assets/avatar.png"
import project from "../../../assets/Project-logo.png"
import tech from "../../../assets/Tech Stack.png"
import book from "../../../assets/Bookshelf.png"
const KnowMe = () => {
  return (
    <div className='md:mt-40 mt-24 flex flex-col'>
      <div className='flex justify-center'>
        <h1 className='text-white text-4xl font-bold mb-10'>Get to know me</h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-9'>
        <KnowMeCard heading="About me" desc="Who I am and what I do" img={avatar}/>
        <KnowMeCard heading="Projects" desc="Projects and learnings" img={project}/>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-9 mt-9'>
        <KnowMeCard heading="Tech Stack" desc="The dev tools, apps, devices that I use." img={tech}/>
        <KnowMeCard heading="Bookshelf" desc="Piece of wisdom and fiction I've enjoyed reading" img={book} />
      </div>
    </div>
  )
}

export default KnowMe
