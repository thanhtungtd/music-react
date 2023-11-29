import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function Detail() {
    const { song } = useContext(Songs)
    return (
        <div className='col-span-1 p-4'>
            <h2 className='text-sky-400 text-l font-bold'>Đang phát</h2>
            <h2 className='text-2xl text-gray-400'>{song.name}</h2>
            <div className='w-[240px] m-auto mt-10'>
                <img className='w-full rounded-xl' src={song.links.images[0].url} alt='avatar' />

            </div>
            <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[60px] rounded-full' src={song.links.images[1].url} alt='avatar' />
                <span className='text-xl text-white'>{song.author}</span>
            </div>
        </div>
    )
}
