import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import '../../style/addOrganizationForm_style.css'

import { addOrganization } from '../../store/actions/organizationsActions'

const AddOrganizationForm = (props) => {

    const schema = Yup.object({
        name: Yup.string().required('* Organization must have a Name'),
        description: Yup.string().required('* A description is required'),
        location: Yup.string().required('* Set it\'s location'),
        members: Yup.number().positive('Number of members must be positive').required('Add at least 1 member'),
        topics: Yup.string().required('* Add some topics ex.(Topic 1, Topic2, etc...)'),
    });

    const dispatch = useDispatch();

    const [imageUrl, setImageUrl] = useState('')

    const handleImageChange = e => {
        if (e.target.files[0]) {
            setImageUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    return (
        <div>
            <Formik
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(addOrganization(values, imageUrl))
                    props.hideModal()
                    setSubmitting(false);
                }}
                initialValues={{
                    name: '',
                    description: '',
                    location: '',
                    members: '',
                    topics: '',
                    image: ''
                }}
            >
                {() => (
                    <Form >
                        <div className='add-organization-field-div'>
                            <label className="label">Image</label>
                            {
                                imageUrl !== '' ?
                                <img className="add-organization-image" src={imageUrl} alt="Organization"></img>
                                :
                                <div className="add-irganization-image-placeholder">255x255</div>
                            }
                            <input type='file' onChange={handleImageChange} />
                            
                            <div className="error-message">
                                <ErrorMessage name="name"></ErrorMessage>
                            </div>
                        </div>
                        <div className='add-organization-field-div'>
                            <label className="label">Name</label>
                            <Field className='field' type="text" name='name' placeholder='Name' />
                            <div className="error-message">
                                <ErrorMessage name="name"></ErrorMessage>
                            </div>
                        </div>
                        <div className='add-organization-field-div'>
                            <label className="label">Description</label>
                            <Field className='field-description field' as='textarea' type='text' name='description' placeholder='Description' />
                            <div className="error-message">
                                <ErrorMessage name="description"></ErrorMessage>
                            </div>
                        </div>
                        <div className='add-organization-field-div'>
                            <label className="label">Location</label>
                            <Field className='field' type='text' name='location' placeholder='Location' />
                            <div className="error-message">
                                <ErrorMessage name="location"></ErrorMessage>
                            </div>
                        </div>
                        <div className='add-organization-field-div'>
                            <label className="label">Members</label>
                            <Field className='field' type='number' name='members' />
                            <div className="error-message">
                                <ErrorMessage name="members"></ErrorMessage>
                            </div>
                        </div>
                        <div className='add-organization-field-div'>
                            <label className="label" >Topics</label>
                            <Field className='field' type='text' name='topics' placeholder='Topic 1, Topics 2, etc...' />
                            <div className="error-message">
                                <ErrorMessage name="topics"></ErrorMessage>
                            </div>
                        </div>
                        <button className='add-organization-submit-button' type="submit">
                            Create
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddOrganizationForm
