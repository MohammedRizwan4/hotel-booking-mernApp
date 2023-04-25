import React from 'react';
import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://img.freepik.com/free-photo/view-dubai-marina-sunrise-uae_268835-1056.jpg?size=338&ext=jpg&ga=GA1.1.1661241199.1670614226&semt=sph" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://img.freepik.com/premium-photo/dubai-mall-dubai-uae_78361-13794.jpg?size=338&ext=jpg&ga=GA1.1.1661241199.1670614226&semt=sph" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t3.ftcdn.net/jpg/00/52/00/62/240_F_52006277_NmQG1GSoEIlROS7KlMgVhgeKAEb8lZwz.jpg" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  );
}

export default Featured;
