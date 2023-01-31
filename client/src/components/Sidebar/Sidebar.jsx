import './sidebar.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const [cats, setCat] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sideBarItems">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://www.zdnet.com/a/img/resize/0a6b0be2f543ddbf313fc83a706b807b77c3c202/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt=""
        />
        <p>
          Our vision is to "produce and sell locally sourced cakes and pies that
          are so delicious and satisfying, that every customer who leaves our
          store does so with a smile."
        </p>
      </div>
      <div className="sideBarItems">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sideBArListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItems">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
          <i className="sideBarIcon fa-brands fa-square-twitter"></i>
          <i className="sideBarIcon fa-brands fa-square-instagram"></i>
          <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
          <i className="sideBarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
