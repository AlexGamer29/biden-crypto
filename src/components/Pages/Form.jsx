import React, { useState, useMemo } from "react";
import { Formik } from 'formik';
import * as Yup from "yup";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, array, InferType, TypeOf } from "yup";
import countryList from 'react-select-country-list'
import "./form.css";

function Form() {
    const [values, setValues] = useState("");

    const schema = Yup.object().shape({
        fullname: Yup.string()
            .required('Fullname is required')
            .min(3, 'Fullname must be at least 3 characters')
            .max(50, 'Fullname must be less than 50 characters'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        usePlatform: Yup.string()
            .required('Use platform is required'),
        primaryResidence: Yup.string()
            .required('Primary residence is required'),
        language: Yup.string()
            .required('Language is required'),
        helpList: Yup.string()
            .required('Help list is required'),
        topicRequest: Yup.string()
            .required('Topic request is required'),
        detailDescription: Yup.string()
            .required('Detail description is required'),
    })

    const initialValues = {
        fullname: "",
        email: "",
        usePlatform: "",
        primaryResidence: "",
        language: "",
        helpList: "",
        topicRequest: "",
        detailDescription: "",
    }

    const handleChange = values => {
        console.log(values);
        setValues(values);
    }

    const usePlatformOptions = [
        { value: 'browser', label: 'Web Browser' },
        { value: 'mobile', label: 'Mobile' },
    ];

    const countryOptions = useMemo(() => countryList().getData(), [])

    const languageOptions = [
        { value: 'english', label: 'English' },
        { value: 'spanish', label: 'Spanish' },
    ];

    const helpListOptions = [
        { value: 'compromised-account', label: 'Compromised Account' },
        { value: 'account-verification', label: 'Account Verification' },
        { value: 'account-management', label: 'Account Management' },
        { value: 'crypto-transfer', label: 'Crypto Transfer' },
        { value: 'usd-transfer', label: 'USD Transfer' },
        { value: 'trading', label: 'Trading' },
        { value: 'api-inquiries', label: 'API Inquiries' },
        { value: 'asset-listing-request', label: 'Asset Listing Request' },
        { value: 'bug-report', label: 'Bug Report' },
        { value: 'feature-request', label: 'Feature Request' },
    ];

    return (
        <Formik validationSchema={schema} initialValues={initialValues}>
            {({
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                handleSubmit,
                setFieldTouched
            }) => {
                return (
                     <form className="formContact">
                        <div className="formContact">
                            <label>Fullname</label>
                            <input 
                            type="text"
                            name="fullname"
                            placeholder="Fullname"
                            onChange={handleChange("fullname")}
                            value={values.fullname}
                            onBlur={() => {
                                console.log("fullname");
                            }}
                             />
                            <span>{errors.fullname}</span>
                        </div>

                        <button type="button" onClick={handleSubmit}>Submit</button>
                     </form>
                
                );
            }}
        </Formik>
    )};

export default Form;