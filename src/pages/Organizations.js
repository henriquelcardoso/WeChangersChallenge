import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { getAllOrganizations } from '../store/actions/organizationsActions'

import OrganizationCard from '../components/organizations/OrganizationCard'
import Header from '../components/navigation/Header'

import { GridLoader } from 'react-spinners'

const Organizations = () => {

    const organizations = useSelector(state => state.organizations.organizations)
    const loading = useSelector(state => state.organizations.loading)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!organizations || organizations.length === 0) {
            dispatch(getAllOrganizations())
        }
    }, [organizations, dispatch])

    return (
        <div>
            <Header/>
            <div className="page-content">
                <Container>
                    <Row>
                        {organizations ? organizations.map(org =>
                            <Col className="organization-card-col" key={org.name} xs={12} md={3}>
                                <OrganizationCard organization={org} />
                            </Col>
                        ) :
                            loading ?
                                <GridLoader
                                    size={150}
                                    color={"#ffb050"}
                                    loading={loading}
                                />
                                : null}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Organizations
