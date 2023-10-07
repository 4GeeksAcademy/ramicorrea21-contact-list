import React , {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const AddContact = () => {
    const {store, actions} = useContext(Context)

    
    const [contact, setContact] = useState({
        address : "",
        agenda_slug: "ramicorrea21",
        email : "",
        full_name : "",
        phone : "",
    })
    const handleChange = (e) =>{
        setContact({
            ...contact, 
            [e.target.name] : e.target.value
        })
    }
 
      
    const handleSubmit = (e) =>{
        e.preventDefault() 
        actions.postContact(contact)
    }


    return (
        <div className="container">
            <h1 className="text-center">Add a contact</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>Full Name</label>
                <input className="form-control form-control-lg" type="text" placeholder="full name" name="full_name" value={contact.full_name} onChange={handleChange}/>
                <label>Email</label>
                <input className="form-control form-control-lg" type="email" placeholder="Email" name="email" value={contact.email} onChange={handleChange} />
                <label>Phone</label>
                <input className="form-control form-control-lg" type="number" placeholder="Phone" name="phone" value={contact.phone} onChange={handleChange} />
                <label>Address</label>
                <input className="form-control form-control-lg" type="text" placeholder="Address" name="address" value={contact.address} onChange={handleChange} />
                <div className="d-grid gap-2 mt-2">
                    <button  className="btn btn-primary">Save</button>
                </div>
            </form>
                <Link to="/"><button className="btn btn-outline-success my-2">Go back to contacts</button></Link>
                

        </div>
    )
}

export default AddContact