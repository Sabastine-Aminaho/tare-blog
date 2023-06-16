import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Category = () => {
  const { data:blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error } </div> }
      { isLoading && <div>Loading...</div>}
      {/* {blogs && <BlogList blogs={blogs} title="All Blogs"/>} */}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.category === 'action')} title="Action"  />}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.category === 'love')} title="Love"  />}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.category === 'horror')} title="Horror"  />}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.category === 'magic')} title="Magic"  />}
    </div>
    
  );
}
 
export default Category;