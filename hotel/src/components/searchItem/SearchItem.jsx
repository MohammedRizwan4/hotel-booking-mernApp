import React from 'react';
import './searchitem.css';

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://t3.ftcdn.net/jpg/00/98/99/74/240_F_98997434_rsOvNq78FbGN1benLE9yKs68TozdnjxU.jpg" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Aprtment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio . 1 bathroom . 21m2 1 full bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so luck in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <div className="siPrice">$123</div>
                    <span className="siTaxOp">Include Taxes and fees</span>
                    <button className='siCheckButton'>See Availability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
