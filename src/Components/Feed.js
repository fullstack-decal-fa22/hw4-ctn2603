import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    const [blocks, setBlocks] = useState([])
    const posts = blocks.map((item, key) => <Block key={key} color={item}/>)

    return (
        <div>
            <Menu createPost={(color) => setBlocks((prevState) => [...prevState, color])}/>

            {posts}
        </div>
    );
}

export default Feed;