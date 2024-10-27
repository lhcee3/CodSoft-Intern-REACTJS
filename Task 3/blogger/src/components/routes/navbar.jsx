import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}
        className='mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded'>
        Home
      </Link>
      <Link to={"/blog/"}
        className='mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded'>
        Blog
      </Link>
      <Link to={"/blog/create"}
        className='mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded'>
        Create a post
      </Link>
    </nav>
  )
}

export default Navbar;