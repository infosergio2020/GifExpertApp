import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = ({defaultCategories = []})=> {
    // const [categories, setCategories] = useState(['One Punch'])
    const [categories, setCategories] = useState( defaultCategories );
    return (
            <>
              <h1 className="header-title"> GifExpertApp </h1>
              <AddCategory setCategories={setCategories}/>
              <hr/>
              <ol>
                {
                    categories.map( category => (
                      <GifGrid key={ category } category={category}/>
                    ))
                }
              </ol>
            </>
        )
}
export default GifExpertApp;