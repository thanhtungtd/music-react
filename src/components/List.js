import React, { useContext, useState } from 'react'
import { Songs } from '../Context'
import './playing.css'


export default function List() {

    const { DataSongs, handleSetSong } = useContext(Songs);
    const [idSong, setidSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    }
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead className='text-white h-16'>
                    <tr>
                        <th className='w-[10%]'>Stt</th>
                        <th className='text-left'>Tiêu đề</th>
                        <th className='w-[10%]'>Tác giả</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DataSongs.map((song, index) =>
                        (<tr key={index}
                            className={'bg-cyan-900 h-10 text-gray-500 hover:bg-cyan-800 hover:text-gray-800 hover:cursor-pointer'}
                            onClick={() => handlePlaySong(song.id)} >
                            <td className='text-center text-rose-100'>{index + 1}</td>
                            <td>{song.name}</td>
                            <td>{song.author}</td>
                            <td className='text-center'><a href={song.url}><i className='fa fa-download'></i></a></td>
                        </tr>)
                        )}

                </tbody>
            </table>
        </div >
    )
}
