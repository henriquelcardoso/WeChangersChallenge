import React, { useState } from 'react'

import { Modal, ModalBody } from 'react-bootstrap'
import { HiOutlineXCircle, HiXCircle } from 'react-icons/hi'

import AddOrganizationForm from './AddOrganizationForm'

const AddOrganizationModal = (props) => {

    const [closeHover, setCloseHover] = useState(false)

    //handles whenever the user hovers the 'Add Organization' button
    const handleCloseHover = () => {
        setCloseHover(!closeHover)
    }

    return (
        <Modal show={props.show} onHide={props.handleShow} animation={false}>
            <ModalBody>
                <div className="align-right">
                    {closeHover ?
                        <HiXCircle className="close-add-organization-modal-icon" onClick={() => {
                            handleCloseHover()
                            props.handleShow()
                        }} onMouseEnter={handleCloseHover} onMouseLeave={handleCloseHover} />
                        :
                        <HiOutlineXCircle className="close-add-organization-modal-icon" onClick={() => {
                            handleCloseHover()
                            props.handleShow()
                        }} onMouseEnter={handleCloseHover} onMouseLeave={handleCloseHover} />
                    }
                </div>
                <AddOrganizationForm hideModal={props.handleShow}/>
            </ModalBody>
        </Modal>
    )
}

export default AddOrganizationModal
