import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import React from 'react';
import { useInView } from 'react-intersection-observer';


const BlogDetails = () => {
  const {id} = useParams();
  const { data:blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();


  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when element comes into view
    threshold: 0.2, // Percentage of the element's visibility needed to trigger
  });

  const animationClass = inView ? 'reveal-animation' : '';

  return (
    
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div> { error } </div> }
      { blog && (
        <article>


        <div ref={ref} className={`reveal-element ${animationClass}`}>
              <h2> { blog.title } </h2>
              <div className="para">
              <p className="subDate">{ blog.date } </p>
              </div>
              <br />
              <div>  
                <img className="img-details" src={blog.picture} alt="" />
              </div>
        </div>


        <div ref={ref} className={`reveal-element ${animationClass}`}>
              <div> { blog.body } </div>
        </div>

          

              <div>  
                <img className="img-container" src={blog.subPicture} alt="" />
              </div>

              <div> { blog.subBody } </div> 
              <p> Author: { blog.author } </p>

          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;