import { useSBlog } from '../hooks'
import { useParams } from 'react-router-dom'
import { FullBlog } from './FullBlog'
import { Appbar } from '../components/Appbar'
import { Spinner } from '../components/Spinner'
export const Blog = () => {
  const { id } = useParams()
  const { sblog, sloading } = useSBlog({
    id: id || ""
  })
  if (sloading || !sblog) {
    return <div >
      <Appbar />
      <div className='flex  justify-center items-center h-100 '>
        <Spinner />
      </div>
    </div>
  }
  return (
    <div>
      <Appbar />
      <FullBlog blog={sblog} />
    </div>
  )
}


