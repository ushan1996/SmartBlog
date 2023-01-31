import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './single.css';
import React from 'react';
export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <SinglePost />
    </div>
  );
}
