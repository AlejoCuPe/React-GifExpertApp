import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kitten']);

    // const handleAdd = ( ) => {
    //     setCategories( [...categories, 'Gay Anime'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( e => 
                        <GifGrid 
                            key = {e}
                            category = {e} 
                            setCategories = {setCategories}
                        />
                    )
                }
            </ol>
        </>
    );
};

export default GifExpertApp;