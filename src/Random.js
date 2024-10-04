import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Random = () => {
    const[gif, setGif] = useState('');

    const response = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=XAoBW8KTuDyDmkLPn7epQqz1iOdv9tRA`;
        const { data } = await axios.get(url);
        const image = data.data.images.downsized_large.url;
        setGif(image);
    }

    useEffect(() => {
        response();
    },[]);

    const handClick = () => {
        response();
    }

    return (
        <div className="random">
            <h3>Your gif here :</h3>
            <img widht={500} src={gif} alt="gif"/>
            <button onClick={handClick}>Generate</button>
        </div>
    )

}

export default Random;