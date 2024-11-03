import { useState } from 'react';

const PostBlog = () => {
  const [blogPostData, setBlogPostData] = useState({
    title: '',
    body: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogPostData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (blogPostData.title && blogPostData.body) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: 1,
            title: blogPostData.title,
            body: blogPostData.body,
          })
        });

        if (!response.ok) {
          throw new Error('Failed to create post');
        }
        const data = await response.json();
        console.log('Post created:', data);
        setSuccess(true);
        setBlogPostData({ title: '', body: '' }); // Reset form
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label 
            htmlFor="title"
            className="block text-sm font-medium"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogPostData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="body"
            className="block text-sm font-medium"
          >
            Body
          </label>
          <textarea
            id="body"
            name="body"
            value={blogPostData.body}
            onChange={handleChange}
            className="w-full p-2 border rounded-md h-32"
            placeholder="Enter post content"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !blogPostData.title || !blogPostData.body}
          className={`w-full p-2 rounded-md ${
            loading || !blogPostData.title || !blogPostData.body
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {loading ? 'Creating Post...' : 'Create Post'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md">
          Post created successfully!
        </div>
      )}
    </div>
  );
};

export default PostBlog;
