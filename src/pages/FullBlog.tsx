import { Circle } from '../components/BlogCard'
import { SBlogtype } from '../hooks'

export const FullBlog = ({blog}:{blog:SBlogtype}) => {
  return (
    <div className='px-50 py-10 roboto-custom '>
      <div className='grid grid-cols-12'>
      <div className='grid col-span-8 flex flex-col gap-2'>
        <div className='text-5xl font-bold '>
        {blog.title}
        </div>
        <div className='text-gray-500'>
        March 12, 2025  
        </div>
        <div>
        {blog.content}
        </div>
      </div>
      <div className='grid col-span-4'>
        <div>
          <div>Author</div>
          <div className='flex items-center gap-4'>
            <div><Circle size={6}/></div>
            <div>
              <div className='text-2xl font-bold my-2'>{blog.author.name}</div>
              <div className='text-gray-500'>Master of mirth, purveyor of puns, and the funniest person in the kingdom.
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

