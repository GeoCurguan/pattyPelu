import React, { useState } from 'react';

const PriceInfo = (props) => {
    var isLeft = props.side;
    var img = props.img;
    return(
        <div>
            {isLeft ? (
                <div className="infoCont">
                    <div className="imgCont">
                        <div className="priceTag"><p>$10000</p></div>
                        <img src={img}></img>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            ) : (
                <div className="infoCont">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="imgCont" style={{justifyContent:"flex-start"}}>
                        <img src={img}></img>
                        <div className="priceTag"><p>$10000</p></div>

                    </div>
                </div>
            )}
        </div>
    );
}
export default PriceInfo;