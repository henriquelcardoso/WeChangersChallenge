import React from 'react'
import '../../style/organizations_style.css'

import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineUserGroup } from 'react-icons/hi'


const OrganizationCard = (props) => {
    return (
        <Link className='organization-card-link' to={{
            pathname: "/organizationDetails",
            state: {
                organization: props.organization
            }
        }}>
            <div className="organization-card-div">
                <img className="organization-card-image" alt='organization' src={props.organization.image} />
                <div className="organization-card-info-div">
                    <h4 className="organization-card-name">
                        <b>{props.organization.name}</b>
                    </h4>
                    <Row>
                        <Col xs={8}>
                            <p className="organization-card-location"><HiOutlineLocationMarker className="organization-card-icon" /> {props.organization.location}</p>
                        </Col>
                        <Col xs={4}>
                            <p className="organization-card-members"><HiOutlineUserGroup className="organization-card-icon" /> {props.organization.members}</p>
                        </Col>
                    </Row>
                    <div >
                        <p className="organization-card-topics">{props.organization.topics}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default OrganizationCard
