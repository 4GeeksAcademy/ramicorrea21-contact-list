import React , {useState, useContext} from "react";
import { Context } from "../store/appContext";
const AddContact = () => {
    const {store, actions} = useContext(Context)


    const initialContact = {
        "address": "",
        "agenda_slug": "ramicorrea21",
        "email": "",
        "full_name": "",
        "phone": ""
    }


    const [newContact, setNewContact] = useState(initialContact)
    const [fullname, setFullname] = useState('')
    const [address, setAdress] = useState('')
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState('')
    return (
        <div className="container">
            <h1 className="text-center">Add a contact</h1>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <label>Full Name</label>
                <input className="form-control form-control-lg" type="text" placeholder="full name" />
                <label>Email</label>
                <input className="form-control form-control-lg" type="email" placeholder="Email" />
                <label>Phone</label>
                <input className="form-control form-control-lg" type="number" placeholder="Phone" />
                <label>Address</label>
                <input className="form-control form-control-lg" type="text" placeholder="Address" />
                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddContact