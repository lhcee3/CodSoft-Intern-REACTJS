import { useState } from 'react';
import { firestore } from '../../config/firebase.config';
import { addDoc, collection, Timestamp } from "@firebase/firestore"

const ref = collection(firestore,'posts');

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const data = {title: title,
        body: body,
        publish: false,
        published_on: Timestamp.now()
    }

    const handleCreate = (e) => {
        e.preventDefault();
        addDoc(ref, data)
        .then(() => {
            alert('Data Successfully Submitted')
        })
        .catch((error) => {
            console.error('Error adding document: ', error)
        })
    }

    return (
        <div>
            <form onSubmit={(event) => {handleCreate(event)}}>
                <input type='text' placeholder='Title' 
                    onChange={(e) => {setTitle(e.target.value)}} required/>
                
                <textarea name='content' type='text' placeholder='Write your content here' rows='10' cols='150' 
                    onChange={(e) => {setBody(e.target.value)}} required>
                </textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost;