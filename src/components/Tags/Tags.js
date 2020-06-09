import React from 'react';
import './styles.css';

const Tags = ({ tags }) => {
    const renderTags = () =>{
        return(
            tags.map(tag => (<div className='tag'><span className='tag-name'>{tag}</span></div>)
        ))
    }
    return (
        <div className='tag-main-container'>
            <div className={'tag-container'}>
                {renderTags()}
            </div>
        </div>
    );
};

export default Tags;
