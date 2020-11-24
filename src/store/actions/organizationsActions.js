import * as actions from './actionTypes'

var organizations = [
    {
        name: 'Wildlife Conservation',
        description: 'We are an Internation organization from South Africa dedicated to save and preserve some of the most important and amazing wild animals on the planet',
        image: window.location.origin + '/img/wildlife.png' ,
        location: 'South Africa',
        members: 78,
        topics: 'Animals, Wild, Environment'
    },
    {
        name: '4Ocean',
        description: '4ocean was founded on the belief that business can be a force for good and that the single actions of individual people, collectively, have the power to change the world. We are a Certified B Corp and Public Benefit Corporation made up of passionate and hard-working educators, researchers, and action-takers who are fighting every single day to end the ocean plastic crisis.',
        image:  window.location.origin + '/img/4ocean.png',
        location: 'Unites States of America',
        members: 200,
        topics: 'Polution, Plastic, Ocean'
    },
    {
        name: 'Infinite Learning',
        description: 'We believe that learning doesn\'t take space and everyone should have access to it. Infinite learning exists to reach as many children has possible around the world and give them the ability to study and grow their skills in multiple areas ',
        image:  window.location.origin + '/img/education.png',
        location: 'Sweden',
        members: 124,
        topics: 'Education, Illiteracy'
    },
]

export const getAllOrganizations = () => {
    return async dispatch => {
        dispatch({ type: actions.ORGANIZATION_START })
        try {
            let allOrganizations = JSON.parse(sessionStorage.getItem("organizations"));

            if (!allOrganizations) {
                allOrganizations = sessionStorage.setItem("organizations", JSON.stringify(organizations));
                console.log(allOrganizations);
            }

            dispatch({ type: actions.ORGANIZATION_GET_ALL, payload: allOrganizations })
            dispatch({ type: actions.ORGANIZATION_SUCCESS })

        } catch (error) {
            dispatch({ type: actions.ORGANIZATION_FAIL, payload: error.message })
        }
        dispatch({ type: actions.ORGANIZATION_FINISH })
    }
}

export const addOrganization = (org, imageUrl) => {
    return async dispatch => {
        dispatch({ type: actions.ORGANIZATION_START })
        try {

            var newOrganization = {
                name:org.name,
                description: org.description,
                location: org.location,
                members: org.members,
                topics: org.topics,
                image: imageUrl
            }

            let allOrganizations = JSON.parse(sessionStorage.getItem("organizations"));

            if (!allOrganizations) {
                allOrganizations = sessionStorage.setItem("organizations", JSON.stringify(newOrganization));
                console.log(allOrganizations);
            }else{
                allOrganizations.push(newOrganization)
                allOrganizations = sessionStorage.setItem("organizations", JSON.stringify(allOrganizations));
            }

            dispatch({ type: actions.ORGANIZATION_GET_ALL, payload: allOrganizations })
            dispatch({ type: actions.ORGANIZATION_SUCCESS })

        } catch (error) {
            dispatch({ type: actions.ORGANIZATION_FAIL, payload: error.message })
        }
        console.log('4');
        dispatch({ type: actions.ORGANIZATION_FINISH })
    }
}