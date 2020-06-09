import React from 'react';
import './styles.css';

const Tags = ({ tags }) => {
    const renderTags = () =>{
        return(
            tags.map(tag => (<div className='tag'><span className='tagName'>{tag}</span></div>)
        ))
    };
    return (
        <div className='tagMainContainer'>
            <div className='tagContainer'>
                {renderTags()}
            </div>
        </div>
    );
};

export default Tags;
