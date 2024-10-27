import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { firestore } from '../../config/firebase.config';
import { doc, getDoc } from "@firebase/firestore"

const BlogView = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const retrievePost = async () => {
      const ref = doc(firestore, 'posts', `${ id }`);//template literals

      try {
        const docSnap = await getDoc(ref);

        setPost(docSnap.data())
      } catch (error) {
        console.log(error);
      }
    }

    retrievePost()
  }, [])

  return (
    <div>
      <div className='w-full max-w-2xl mx-auto'>
        <h1 className='text-2xl'>
          <span><b>Title: </b></span>
          <span>{post.title}</span>
        </h1>
        <p><b>Body:</b></p>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default BlogView;