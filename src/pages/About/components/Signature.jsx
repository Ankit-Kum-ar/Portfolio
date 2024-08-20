import React from 'react'
import sign from "../../../assets/sign.png"
const Signature = () => {
  return (
    <div>
        <p className='text-[#a5a5a5] text-lg font-medium mt-16'>
            Feel free to reach out via &nbsp;
            <a href="mailto: ankitcode2511@gmail.com">
                <span className='text-white underline'>e-mail</span>
            </a>
            &nbsp; or follow me on &nbsp;
            <a href="https://x.com/AnkitKu4855404">
                <span className='text-white underline'>Twitter.</span>
            </a>
            &nbsp;Want to see where I’ve worked? Check out my &nbsp;
            <a  href='https://drive.google.com/file/d/1vlzwbMNaT5Cq1LDdnTSX6Rt8gpEfMx-R/view?usp=sharing' target='_blank'>
                <span className='text-white underline'>Resume,</span>
            </a>
            &nbsp; or connect with me on &nbsp;
            <a href="https://www.linkedin.com/in/ankit-kumar-41a243240/">
                <span className='text-white underline'>LinkedIn.</span>
            </a>
        </p>
        
        <p className='text-[#a5a5a5] text-lg font-medium mt-16'>Let's build something great,</p>
        <img src={sign} alt="Signature"/>
    </div>
  )
}

export default Signature
