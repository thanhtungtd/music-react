import React, { useContext } from 'react'
import './playing.css'
import { Songs } from '../Context';

export default function Playing() {
    const { song } = useContext(Songs)
    return (
        <div className='mt-2'>
            <audio controls autoPlay className='play-ctrl' source src={song.url} loop='false'>

            </audio>
        </div>
    )
}
