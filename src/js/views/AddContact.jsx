import React , {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { json } from "react-router";
const AddContact = () => {
    const {store, actions} = useContext(Context)



    const [newContact, setNewContact] = useState()
    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState('')

    const addNewContact = async () =>{
        setNewContact({
            "address" : address,
            "agenda_slug": "ramicorrea21",
            "email" : email,
            "full_name" : fullname,
            "phone" : phone,
        })
        
            try {
                let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
                    method : "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body : JSON.stringify(newContact)
                })
                if(response.ok){
                    actions.getAllContacts()
                }
            } catch (error) {
                console.log(error);
            }
    }

    return (
        <div className="container">
            <h1 className="text-center">Add a contact</h1>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <label>Full Name</label>
                <input className="form-control form-control-lg" type="text" placeholder="full name" onChange={(e) => setFullname(e.target.value)}/>
                <label>Email</label>
                <input className="form-control form-control-lg" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <label>Phone</label>
                <input className="form-control form-control-lg" type="number" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                <label>Address</label>
                <input className="form-control form-control-lg" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                <div className="d-grid gap-2 mt-2">
                    <button type="submit" className="btn btn-primary" onClick={addNewContact}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddContact