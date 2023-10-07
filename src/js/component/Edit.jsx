import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Edit = () => {
    const {store, actions} = useContext(Context)
    const {id} = useParams()

    const findContact = () =>{
        let result = store.contacts.find((item) => item.id == id)
        console.log(result)
        setEditedContact(result)
    }

    const [editedContact, setEditedContact] = useState({
        address : "",
        agenda_slug: "ramicorrea21",
        email : "",
        full_name : "",
        phone : "",
    })
    const handleChange = (e) =>{
        setEditedContact({
            ...editedContact,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault() 
        actions.putEditedContact(id, editedContact)
    }

    useEffect(()=> {
        findContact()
    }, [store.contacts])

    return (

        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                <form onSubmit={handleSubmit}>
                    <h1 className='text-center'>Edit Contact</h1>
                                    <label>Full Name</label>
                                    <input className="form-control form-control-lg" type="text" placeholder="full name" name="full_name" value={editedContact?.full_name} onChange={handleChange} />
                                    <label>Email</label>
                                    <input className="form-control form-control-lg" type="email" placeholder="Email" name="email" value={editedContact?.email} onChange={handleChange} />
                                    <label>Phone</label>
                                    <input className="form-control form-control-lg" type="number" placeholder="Phone" name="phone" value={editedContact?.phone} onChange={handleChange} />
                                    <label>Address</label>
                                    <input className="form-control form-control-lg" type="text" placeholder="Address" name="address" value={editedContact?.address} onChange={handleChange} />
                                    <div className="d-grid gap-2 mt-2">
                                        <button className="btn btn-primary">Save</button>
                                    </div>
                                    <Link to="/"><button className="btn btn-outline-success my-2">Go back to contacts</button></Link>
                                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Edit