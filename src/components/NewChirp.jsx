import React from 'react';

const NewChirp = ({ imageLink, username, chirpText }) => {
    return (
        <>
            <div className="row" style={{ backgroundColor: '#3b93da' }}>
                <div className="col-md-4"></div>
                <div className="col-md-8" style={{ margin: '0.25em 0 0' }}>
                    <div style={{ border: "5px solid black", margin: '0 2em 1em', padding: '1em', backgroundColor: 'white' }}>
                        <img src={imageLink}
                            alt="egg" width="75px" height="75px" />
                        <h3>@{username}</h3>
                        <p>{chirpText}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewChirp;