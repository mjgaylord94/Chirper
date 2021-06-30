import React from 'react';

const Header = () => {
    return (
        <div className="row" style={{ backgroundColor: `white`, borderBottom: '5px black solid' }}>
            <div className="col-md-4"></div>
            <h1 className="col-md-4" style={{ textAlign: 'center', color: '#3b93da', fontSize: '5em', margin: '0', padding: '0 .75em' }}>
                Chirper
            </h1>
            <div className="col-md-4"></div>
        </div>
    )
};

export default Header;