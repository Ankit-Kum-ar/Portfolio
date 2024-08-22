import React from 'react'
import TechStackCard from './TechStackCard'
import { stack } from '../../../utils/constant'

const TechStackContainer = () => {
  return (
    <div className='mt-16 md:w-9/12 mx-auto flex md:flex-wrap justify-center items-center gap-5'>

        {
            stack.map((tech, index) => (
                <TechStackCard key={index} tech={tech} />
            ))
        }
    </div>
  )
}

export default TechStackContainer
