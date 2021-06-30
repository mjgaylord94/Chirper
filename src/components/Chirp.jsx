import React from 'react';

const Chirp = ({ imageLink, username, chirpText }) => {
    return (
        <>
            <div style={{ border: "1px solid black" }}>
                <img src={imageLink}
                    alt="egg" width="75px" height="75px"/>
                <h3>@{username}</h3>
                <p>{chirpText}</p>
            </div>
        </>
    );
};

export default Chirp;