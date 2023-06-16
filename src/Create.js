import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');
  const [subBody, setSubBody] = useState('');
  const [author, setAuthor] = useState('');
  const [picture, setPicture] = useState('');
  const [subPicture, setSubPicture] = useState('');
  const [date, setDate] = useState('');
  const [subDate, setSubDate] = useState('');

  const [uploading, setUploading] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = { title, body, subBody, author, picture, subPicture, date, category, subDate  };

    setUploading(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New blog added successfully!')
      setUploading(false);
      history.push('/')
    })

  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" required value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Category</label>
        <input type="text" required value={category} 
          onChange={(e) => setCategory(e.target.value)}
        />

        <label>Blog Body</label>
        <textarea required value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Sub Blog Body</label>
        <textarea required value={subBody}
          onChange={(e) => setSubBody(e.target.value)}
        ></textarea>

        <label>Blog Author</label>
        <input type="text" required value={author} 
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Image Link</label>
        <input type="text" required value={picture} 
          onChange={(e) => setPicture(e.target.value)}
        />
        <label>Sub Image Link</label>
        <input type="text" required value={subPicture} 
          onChange={(e) => setSubPicture(e.target.value)}
        />

        <label>Released Date</label> 
        <input type="text"  required value={date} 
          onChange={(e) => setDate(e.target.value)}
        /> 

        <label>Preview date Date</label> 
        <input type="text"  required value={subDate} 
          onChange={(e) => setSubDate(e.target.value)}
        /> 
        
        

        {!uploading && <button>Add blog</button>}
        {uploading && <button disabled>Uploading...</button>}
        
      </form>
    </div>
  );
}
 
export default Create;