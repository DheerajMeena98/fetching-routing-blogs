import Loader from 'react-loader-spinner'

import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    isLoading: true,
    blogData: [],
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogData} = this.state
    const {title, author, avatarUrl, imageUrl, content} = blogData
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-item-details-container">
            <h1 className="blog-title"> {title} </h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt={author} className="author-image" />
              <p className="author-name"> {author}</p>
            </div>
            <img
              src={imageUrl}
              alt={title}
              className="blog-item-details-image"
            />
            <p className="blog-content"> {content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
