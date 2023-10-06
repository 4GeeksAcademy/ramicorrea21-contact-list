import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
const Edit = (props) => {
    const {store, actions} = useContext(Context)


    let id = props.id
    const [editContact, setEditContact] = useState()
    const [editName, setEditName] = useState('')
    const [editEmail, setEditEmail] = useState('')
    const [editPhone, setEditPhone] = useState('')
    const [editAddress, setEditAddress] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault() 
        updateContact()
    }

    const updateContact = () =>{
        setEditContact({
            address : editAddress,
            agenda_slug: "ramicorrea21",
            email : editEmail,
            full_name : editName,
            phone : editPhone,
        })
        if(editContact != undefined){
            actions.putEditedContact(id, editContact)
        }
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Contact</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <form onSubmit={handleSubmit}>
                                    <label>Full Name</label>
                                    <input className="form-control form-control-lg" type="text" placeholder="full name" onChange={(e) => setEditName(e.target.value)} />
                                    <label>Email</label>
                                    <input className="form-control form-control-lg" type="email" placeholder="Email" onChange={(e) => setEditEmail(e.target.value)} />
                                    <label>Phone</label>
                                    <input className="form-control form-control-lg" type="number" placeholder="Phone" onChange={(e) => setEditPhone(e.target.value)} />
                                    <label>Address</label>
                                    <input className="form-control form-control-lg" type="text" placeholder="Address" onChange={(e) => setEditAddress(e.target.value)} />
                                    <div className="d-grid gap-2 mt-2">
                                        <button className="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Edit