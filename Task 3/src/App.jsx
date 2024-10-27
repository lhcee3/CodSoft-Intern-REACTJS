import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/routes/navbar";
import Home from "./components/pages/home";
import CreatePost from "./components/posts/create";
import BlogList from "./components/posts/list";
import BlogSingle from "./components/posts/single";
import BlogEdit from "./components/posts/edit";

function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/blog/' element={<BlogList/>} />
            <Route path='/blog/create' element={<CreatePost/>}  />
            <Route path='/blog/:id' element={<BlogSingle/>}  />
            <Route path='/blog/edit/:id' element={<BlogEdit/>}  />
        </Routes>
      </Router>
    </div>
  )
}

export default App
