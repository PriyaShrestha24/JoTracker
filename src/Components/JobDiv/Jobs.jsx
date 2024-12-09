import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo from '../../Assets/logo.png'
import ea from '../../Assets/ea.png'
import apple from '../../Assets/apple.png'
import asus from '../../Assets/asus.png'
import samsung from '../../Assets/samsung.png'
import acer from '../../Assets/acer.png'
import embassy from '../../Assets/embassy.png'
import axor from '../../Assets/axor.png'

const Data = [

  {
    id:1,
    image:logo,
    title:'Web Developer',
    time:'Now',
    location:'Canada',
    desc: 'Lorem ipsum dolor m, odio autem rem eos, iusto doloremque ut sed temporibus quidusdam enim et',
    company:'huwawei'
  },

  {
    id:2,
    image:axor,
    title:'Software Eng',
    time:'10Hrs',
    location:'Nepal',
    desc: 'Lorem ipsum dolor m, odio autem rem eos, iusto doloremque ut sed temporibus quidusdam enim et',
    company:'Axor Tech'
  },

  {
    id:3,
    image:samsung,
    title:'UI/UX Designer',
    time:'5Hrs',
    location:'India',
    desc: 'Lorem ipsum dolor m, odio autem rem eos, iusto doloremque ut sed temporibus quidusdam enim et',
    company:'Samsung'
  },

  {
    id:4,
    image:asus,
    title:'Product Designer',
    time:'Now',
    location:'USA',
    desc: 'Lorem ipsum dolor m, odio autem rem eos, iusto doloremque ut sed temporibus quidusdam enim et',
    company:'Asus'
  },

  {
    id:5,
    image:embassy,
    title:'Data Analyst',
    time:'6Hrs',
    location:'Australia',
    desc: 'Lorem ipsum dolor m, odio autem rem eos, iusto doloremque ut sed temporibus quidusdam enim et',
    company:'Government'
  },

  {
    id:6,
    image:acer,
    title:'Data Scientist',
    time:'8Hrs',
    location:'China',
    desc: 'Lorem ipsum dolor m, odio autem rem eos, iusto doloremque ut sed temporibus quidusdam enim et',
    company:'Acer'
  },
  
  {
    id:7,
    image:apple,
    title:'Mobile App Developer',
    time:'15Hrs',
    location:'Russia',
    desc: 'Lorem ipsum dolor m, odio autem rem eos, iusto doloremque ut sed temporibus quidusdam enim et',
    company:'Apple'
  },

  {
    id:8,
    image:ea,
    title:'Researcher',
    time:'2 Days',
    location:'Norway',
    desc: 'Lorem ipsum dolor m, odio autem rem eos, iusto doloremque ut sed temporibus quidusdam enim et',
    company:'Newcastle'
  }
]


const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center
      py-10">
      
        {
          Data.map(({id,image,title,time,location,desc,company}) =>{
              return(
          <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded
          [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
            <span className='flex justify-between items-center gap-4'> 
              <h1 className='text-[16px] font-semibold text-textColor
              group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>{time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{location}</h6>

            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
            group-hover:text-white'>
              {desc}
            </p>

            <div className='company flex items-center gap-2'>
              <img src={image} alt='company logo' className='w-[10%]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
            </div>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
            font-semibold text-textColor hover:bg-white group-hover/item:text-textColor
            group-hover:text-white'>Apply Now</button>
          </div>
         )
        })
    }
      </div>
    </div>
  )
}

export default Jobs
