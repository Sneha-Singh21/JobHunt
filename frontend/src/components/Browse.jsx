import React from 'react'
import Navbar from './shared/Navbar.jsx';
import CardForJob from './shared/CardForJob.jsx';

const randomJobs = [1, 2, 3, 4, 5];

const Browse = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-10'>
            <h1 className='font-semibold text-xl my-8 text-gray-900'>Search Results ({randomJobs.length})</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    randomJobs.map((item, index) => {
                        return (
                            <CardForJob/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Browse;