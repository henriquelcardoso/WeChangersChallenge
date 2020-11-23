import React, { useState } from 'react'
import '../../style/navigation_style.css'
import logo from '../../img/wechangerschallenge_logo.png'

import { Container } from 'react-bootstrap'
import { HiPlusCircle, HiOutlinePlusCircle } from 'react-icons/hi'

import AddOrganizationModal from '../organizations/AddOrganizationModal'

const Header = () => {

    const [addHover, setAddHover] = useState(false)

    const [showAddOrganization, setShowAddOrganization] = useState(false);
    const handleShowAddOrganization = () => setShowAddOrganization(!showAddOrganization);

    //handles whenever the user hovers the 'Add Organization' button
    const handleAddHover = () => {
        setAddHover(!addHover)
    }

    return (
        <div className="header">
            <Container className="header-container">
                <a href='/'>
                    <img className="header-logo" src={logo} alt='logo' />
                </a>
                <div className="header-add-org" onMouseEnter={handleAddHover} onMouseLeave={handleAddHover} onClick={() => {
                    handleShowAddOrganization()
                }}>
                    {
                        addHover ?
                            <HiPlusCircle className="header-add-icon" />
                            :
                            <HiOutlinePlusCircle className="header-add-icon" />
                    }
                    <p className='header-add'>Add Organization</p>
                </div>
            </Container>
            <AddOrganizationModal show={showAddOrganization} handleShow={handleShowAddOrganization}/>
        </div>
    )
}

export default Header
