import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { blogMeta } from './BlogList'; // Import the blogs array
import BlogMarkdown  from './BlogMarkdown';

const BlogPost = ({ match, location }) => {
  const { id } = match.params;
  const blog = blogMeta.find((blog) => blog.id === id); // Find the blog based on the ID

  const [text, setText] = useState(null);

  useEffect(() => {
		if (blog && blog.markdown){
			fetch(blog.markdown)
				.then((response) =>  response.text() )
				.then((text) =>  setText(text))
				.catch((error) => {
					console.error('Error fetching file:', error);
				});
		}
  }, [blog]);


      //<BlogMarkdown markdownContent={text} />
  return (
    <div>
      <Link to="/">Return to Home Page</Link>
      <h1>THIS IS MY BLOG</h1>

      <BlogMarkdown markdownContent={text} />

    </div>
  );
};

export default BlogPost;

