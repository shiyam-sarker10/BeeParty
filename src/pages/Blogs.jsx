import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../Components/BlogCard/BlogCard';

const Blogs = () => {
    const blogData = useLoaderData()
    
    return (
      <div className='home-bg my-20'>
        <div className='grid grid-cols-1 container mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
          {blogData?.map((blog,idx) => (
            <BlogCard key={idx} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    );
};

export default Blogs;