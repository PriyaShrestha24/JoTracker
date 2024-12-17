import React, { useState } from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo from '../../Assets/logo.png'
import ea from '../../Assets/ea.png'
import apple from '../../Assets/apple.png'
import asus from '../../Assets/asus.png'
import samsung from '../../Assets/samsung.png'
import acer from '../../Assets/acer.png'
import embassy from '../../Assets/embassy.png'
import axor from '../../Assets/axor.png'
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('')
  const [companyFilter, setCompanyFilter] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [jobTypeFilter, setJobTypeFilter] = useState('')
  const [levelFilter, setLevelFilter] = useState('')

  // Handle filter changes
  const handleSearchChange = (e) => setSearchTerm(e.target.value)
  const handleCompanyChange = (e) => setCompanyFilter(e.target.value)
  const handleLocationChange = (e) => setLocationFilter(e.target.value)
  const handleJobTypeChange = (e) => setJobTypeFilter(e.target.value)
  const handleLevelChange = (e) => setLevelFilter(e.target.value)

  // Filter the Data based on filter values
  const filteredJobs = Data.filter((job) => {
    return (
      (searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (companyFilter === '' || job.company.toLowerCase().includes(companyFilter.toLowerCase())) &&
      (locationFilter === '' || job.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (jobTypeFilter === '' || job.type === jobTypeFilter) &&
      (levelFilter === '' || job.level === levelFilter)
    )
  })

  return (
    <div>
      {/* Filter Section */}
      <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
        <form action="">
          <div className="firstDiv flex justify-between rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
            {/* Search Bar */}
            <div className="flex gap-2 items-center">
              <AiOutlineSearch className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search Job Here"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            {/* Company Filter */}
            <div className="flex gap-2 items-center">
              <BsHouseDoor className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search by company..."
                value={companyFilter}
                onChange={handleCompanyChange}
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            {/* Location Filter */}
            <div className="flex gap-2 items-center">
              <CiLocationOn className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search by location..."
                value={locationFilter}
                onChange={handleLocationChange}
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
              Search
            </button>
          </div>
        </form>

        {/* Filter Criteria */}
        <div className="secDiv flex items-center gap-10 justify-center gap-2">
          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Sort by:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-4 py-1"
              value={jobTypeFilter}
              onChange={handleJobTypeChange}
            >
              <option value="">Relevance</option>
              <option value="full-time">Full-time</option>
              <option value="remote">Remote</option>
              <option value="contract">Contract</option>
              <option value="part-time">Part-time</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="level" className="text-[#808080] font-semibold">
              Level:
            </label>
            <select
              name=""
              id="level"
              className="bg-white rounded-[3px] px-4 py-1"
              value={levelFilter}
              onChange={handleLevelChange}
            >
              <option value="">Any Level</option>
              <option value="senior">Senior</option>
              <option value="intermediate">Intermediate</option>
              <option value="beginner">Beginner</option>
            </select>
          </div>

          <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
        </div>
      </div>

      {/* Jobs List */}
      {/* <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {filteredJobs.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />{time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="company logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black"
              onClick={() => applyJob({ id, image, title, time, location, desc, company })}>
                Apply Now
              </button>
            </div>
          )
        })}
      </div> */}
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {filteredJobs.map((job) => {
          return (
            <div
              key={job.id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold">{job.title}</h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {job.time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{job.location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]">
                {job.desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={job.image} alt="company logo" className="w-[10%]" />
                <span className="text-[14px]">{job.company}</span>
              </div>
              <button
                className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold"
                onClick={() => navigate('/dashboard', { state: { job } })}
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Jobs;
