import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {author, id, avatarUrl, imageUrl, title, topic} = eachBlog
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li className="each-blog-item">
        <img src={imageUrl} alt={`item${id}`} className="each-blog-image" />
        <div className="each-blog-text-card">
          <p className="each-blog-topic"> {topic}</p>
          <h1 className="each-blog-title"> {title}</h1>
          <div className="each-blog-avatar-container">
            <img
              src={avatarUrl}
              className="each-blog-avatar"
              alt={`avatar${id}`}
            />
            <p className="author-text"> {author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
