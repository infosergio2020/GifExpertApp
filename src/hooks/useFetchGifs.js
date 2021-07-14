import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const key = 'dpoD26YubbJ6ixDgvXuW7Qc9cH7vVvxc';
    const value = 10;
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getGifs(category,value,key)
            .then( imgs => {
                    setState({
                        data:imgs,
                        loading:false
                    });
            })
    }, [ category ]);

    return state;
}