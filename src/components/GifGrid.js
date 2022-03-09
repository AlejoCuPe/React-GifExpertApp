import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category, setCategories }) => {

    const { data:images, loading } = useFetchGifs( category );

    const handleDelete = () => { 
        setCategories( cats => cats.filter( e => e!==category));
     }

    return (
        <>
            <table className='gridHeader'>
                <tbody>
                    <tr>
                        <th><h3 className='animate__animated animate__fadeIn'>{ category }</h3></th>
                        <th><button className='delButton' onClick={ handleDelete }>X</button></th>
                    </tr>
                </tbody> 
            </table>
            

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className='card-grid'>

                { images.map( img => 
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                )}
            </div>
        </>
    )
}

GifGrid.propTypes = {}

export default GifGrid