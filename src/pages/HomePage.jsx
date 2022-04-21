import { useEffect, useState } from 'react';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const getPosts = async () => {
    const res = await fetch('http://localhost:3001/posts')
    const data = await res.json()
    setPosts(data);
  }

  useEffect(() => {
    getPosts()
  }, []);
  
  const addPost = async () => {
    const res = await fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: JSON.stringify({ author, title }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const newPost = await res.json()
    setPosts([...posts, newPost])
  }

  return (
    <div>
      <h1>Home</h1>

      <section>
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addPost}>Submit</button>
      </section>

      <section>
        {posts.map((post) => (
          <p key={post.id}>
            <b>{post.author}</b>{" "}
            <span>{post.title}</span>
          </p>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
