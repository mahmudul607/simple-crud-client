
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser= useLoaderData();
    // const [user, setUser]= useState(loadedUser);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
       

        const updateUser = {name, email};
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            

        })
    }
    return (
        <div>
           <h3>Update user Info</h3>
           <div>
                <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={loadedUser.name} />
                <br />
                <input type="email" name="email" defaultValue={loadedUser.email} />
                <br />
                <input type="submit" value="Update" />
                </form>
           </div>
        </div>
    );
};

export default Update;