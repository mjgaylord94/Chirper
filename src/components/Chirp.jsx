import React from 'react';

const Chirp = ({ imageLink, username, chirpText }) => {
    return (
        <>
            <div style={{ border: "5px solid black", margin: '0 2em 1em', marginTop: '0', padding: '1em', backgroundColor: 'white' }}>
                <img src={imageLink}
                    alt="egg" width="75px" height="75px"/>
                <h3>@{username}</h3>
                <p>{chirpText}</p>
            </div>
        </>
    );
};

export default Chirp;