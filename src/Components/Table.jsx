// PostsTable.js
import React, { useState, useEffect } from "react";
import "../CSS/Table.css";
function PostsTable() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const data2 = page * postsPerPage;

  const data1 = data2 - postsPerPage;

  const currentPosts = posts.slice(data1, data2);

  // Function to handle page change
  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default PostsTable;
