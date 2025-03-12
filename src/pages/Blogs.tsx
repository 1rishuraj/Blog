import { Appbar } from '../components/Appbar'
import { BlogCard } from '../components/BlogCard'
import { useBlogs } from '../hooks'
import { Link } from 'react-router-dom'
import { BlogCardskeleton } from '../components/BlogCardskeleton'
export const Blogs = () => {
  const {blogs,loading} =useBlogs();
  if(loading){
    return <div>
      <Appbar/>
      <div className='flex flex-col items-center my-4 '>
      <BlogCardskeleton/>
      <BlogCardskeleton/>
      <BlogCardskeleton/>
      <BlogCardskeleton/>
      <BlogCardskeleton/>
      </div>
      </div>
  }
  return (
    <div >
    <Appbar />
    <div className='flex flex-col items-center my-4 '>
        {blogs.map(b=><Link to={`/blog/${b.id}`}><BlogCard
        title={b.title}
        content={b.content}
        authorname={b.author.name}
        publishedDate="March 12, 2025"
        id={b.id}
        /></Link> )}
        
    </div>
    </div>
  )
}

