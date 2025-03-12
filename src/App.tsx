import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Signup } from './pages/Signup'
import {Publish} from './pages/Publish'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'jotai'
function App() {

  return (
    <div>
      <Provider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
