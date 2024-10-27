import BlogList from "../posts/list";

const Home = () => {
    return (
        <div>
            <div className='block-welcome'>
                <h1>Welcome</h1>
                <p>This is a blog site by Sai Aneesh</p>
            </div>
            <div className='block-blog'>
                <h1>Posts</h1>
                <p>Check my latest blog posts</p>
                <BlogList/>
            </div>
        </div>
    )
}

export default Home;