import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AnnouncementBar = ({message, link, route}) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className={`bg-gray-400 bg-opacity-[25%] text-black text-center p-2 shadow-md ${isHovering ? 'scroll-paused' : 'scroll-marquee'}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <p className='truncate '>
                {message}
                {link && <a href={link} className="underline text-gray-600 hover:text-red-400 pl-1">Click Here</a>}
                {route && <Link to={route} className="underline text-gray-600 hover:text-red-400">Click Here</Link>}
                </p>
        </div>
    );
};

export default AnnouncementBar;