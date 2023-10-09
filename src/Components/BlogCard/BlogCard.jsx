import React from 'react';

const BlogCard = ({blog}) => {
    const {id,title,image,date ,description} = blog
    return (
      <div>
        <div className="bg-gray-50 p-8 space-y-4 shadow-md rounded-lg">
          <div>
            <img className="w-[400px] rounded-t-xl" src={image} alt="" />
          </div>
          <h4 className="text-2xl font-title text-gray-800">{title}</h4>
          <p className="text-gray-500">{date}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
};

export default BlogCard;