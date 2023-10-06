import React , {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const AddContact = () => {
    const {store, actions} = useContext(Context)

    const [newContact, setNewContact] = useState()
    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState('')
 
    const addNewContact = async () =>{
         setNewContact({
            address : address,
            agenda_slug: "ramicorrea21",
            email : email,
            full_name : fullname,
            phone : phone,
        })
        if (newContact != undefined){
           actions.postContact(newContact)
        }
      
    }
    const handleSubmit = (e) =>{
        e.preventDefault() 
        addNewContact()
    }


    return (
        <div className="container">
            <h1 className="text-center">Add a contact</h1>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input className="form-control form-control-lg" type="text" placeholder="full name" onChange={(e) => setFullname(e.target.value)}/>
                <label>Email</label>
                <input className="form-control form-control-lg" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <label>Phone</label>
                <input className="form-control form-control-lg" type="number" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                <label>Address</label>
                <input className="form-control form-control-lg" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                <div className="d-grid gap-2 mt-2">
                    <button  className="btn btn-primary">Save</button>
                </div>
            </form>
                <Link to="/"><button className="btn btn-outline-success my-2">Go back to contacts</button></Link>
                

        </div>
    )
}

export default AddContact