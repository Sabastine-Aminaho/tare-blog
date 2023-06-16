import { Link } from "react-router-dom";
import React from 'react';
import { useInView } from 'react-intersection-observer';


const BlogList = ({blogs, title}) => {
    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger once when element comes into view
      threshold: 0.2, // Percentage of the element's visibility needed to trigger
    });
  
    const animationClass = inView ? 'reveal-animation' : '';

  return (
    <div ref={ref} className={`reveal-element ${animationClass}`}>
    <div>
      <h2>{title}</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <img src={blog.picture} alt="" /> <br /> <br /> 
          <h2> { blog.title } </h2> <br /> <br /> 
          <div className="para">
          <p className="author">Written By: {blog.author} </p>
          <p className="subDate">{blog.subDate} </p>
          </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}
 
export default BlogList;