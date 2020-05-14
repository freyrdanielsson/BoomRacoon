import React from 'react';

import share from './Ei-share-apple.svg';

import './IosPrompt.scss';

function IosPrompt(props) {
    const { setIsClosed } = props;

    return (
        <div className='modal'>
            <div className='modal__content'>
                <h3 className='modal__content__header'>Install this app</h3>
                <p>Install this application on your homescreen for a better experience.</p>
                <p className='modal__content__instruction'>
                    Tap
                    <img src={share} className='modal__content__share' alt='Add to homescreen' />
                    then &quot;Add to Home Screen&quot;
                </p>
                <button className='modal__content__close' onClick={() => setIsClosed(true)}>Close</button>
            </div>
        </div>
    )

}

export default IosPrompt