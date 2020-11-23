import React from 'react'
import Header from '../components/navigation/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { HiOutlineLocationMarker, HiOutlineUserGroup } from 'react-icons/hi'

import '../style/organizationDetails_style.css'
import '../style/organizations_style.css'


const OrganizationDetails = (props) => {

    const organization = props.location.state.organization

    return (
        <div>
            <Header />
            <div className="page-content">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className='organization-details-image' src={organization.image} alt='Organization' />
                        </Col>
                        <Col className='organization-detail-info-col' xs={12} md={6}>
                            <h1>
                                <b>{organization.name}</b>
                            </h1>
                            <p className="organization-card-location"><HiOutlineLocationMarker className="organization-card-icon" /> {organization.location}</p>
                            <p className="organization-card-members"><HiOutlineUserGroup className="organization-card-icon" /> {organization.members}</p>
                            <p className="organization-card-topics">{organization.topics}</p>
                        </Col>
                    </Row>
                    <Row className='organization-detail-description-row'>
                        <Col className='organization-detail-description-col' >
                            <p>{organization.description}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default OrganizationDetails
