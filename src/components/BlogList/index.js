import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsListData()
  }

  getBlogsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const jsonData = await response.json()
    const updatedData = jsonData.map(eachBlog => ({
      id: eachBlog.id,
      author: eachBlog.author,
      avatarUrl: eachBlog.avatar_url,
      imageUrl: eachBlog.image_url,
      title: eachBlog.title,
      topic: eachBlog.topic,
    }))

    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <ul className="blogs-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(eachBlog => (
            <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
