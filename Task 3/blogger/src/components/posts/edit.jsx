import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { firestore } from '../../config/firebase.config';
import { doc, updateDoc, getDoc } from "@firebase/firestore"

const BlogEdit = () => {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [post, setPost] = useState([]);

    const ref = doc(firestore, 'posts', `${ id }`);//template literals

    useEffect(() => {
        const retrievePost = async () => {
            try {
                const docSnap = await getDoc(ref);

                setTitle(docSnap.data().title)
                setBody(docSnap.data().body)
            } catch (error) {
                console.log(error);
            }
        }

        retrievePost()
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();
        //Add data to the store
        try{
            await updateDoc(ref, {
              title: title,
              body: body
            })
            onClose()
          } catch (err) {
            alert(err)
          }    
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input name='title' type='text' value={title}
                    onChange={(e) => {setTitle(e.target.value)}} required/>
                
                <textarea name='body' type='text' value={body} rows='10' cols='150' 
                    onChange={(e) => {setBody(e.target.value)}} required> 
                </textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default BlogEdit;