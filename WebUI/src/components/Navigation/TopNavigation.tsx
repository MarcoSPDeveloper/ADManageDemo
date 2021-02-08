import React from 'react'

function TopNavigation() {
    return(
          <ul className="nav nav-tabs navbar-light bg-light">
            <li className="nav-item">
              <a className="nav-link active" href="#">DE- Lossburg</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">DE - Radevormwald</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">DE- Rednitzhembach</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Others</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">BE - Standort Who</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">US- Standort XY</a>
                    <a className="dropdown-item" href="#">US - Standort Z</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">DK - Standort XYZ</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">NL - Standort XYZ</a>
                </div>
            </li>
          </ul>
    );
    
};

export default TopNavigation;