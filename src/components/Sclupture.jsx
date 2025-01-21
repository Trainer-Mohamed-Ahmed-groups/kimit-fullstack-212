import { useState } from 'react';
import { sculptureList } from '../data/data';
import { Button } from 'react-bootstrap';

export default function Gallery() {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setIndex(index + 1);
    }

    let sculpture = sculptureList[index];

    function handleMoreClick() {
        setShowMore(!showMore);
    }
    return (
        <div>
            <Button variant='info' onClick={handleClick}>
                Next
            </Button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}

        </div>
    );
}