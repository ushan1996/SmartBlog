import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from 'axios';
import './home.css';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPost] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/posts/' + search);
      setPost(res.data);
    };
    fetchPost();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts posts={posts} />
      </div>
    </>
  );
}
