import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import countryList from 'react-select-country-list'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import "../css/formContact.css"

export const Test = () => {
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

    const validationOpt = { resolver: yupResolver(schema) }

    const { register, handleSubmit, watch, formState } = useForm(validationOpt);

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 4))
        return false;
    }

    const { errors } = formState;



    const usePlatform = [
        { value: 'browser', label: 'Web Browser' },
        { value: 'mobile', label: 'Mobile' },
    ];

    const country = useMemo(() => countryList().getData(), [])

    const language = [
        { value: 'english', label: 'English' },
        { value: 'spanish', label: 'Spanish' },
    ];

    const helpList = [
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
        <form className="formContact" onSubmit={handleSubmit(onSubmit)}>
            {/* <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>} */}
            <div className="formContact">
                <label>Fullname</label>
                <input type="text" {...register("fullname", { required: true })}
                    className={`form-control ${errors.fullname ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.name?.message}</div>
            </div>

            <div className="formContact">
                <label>Email</label>
                <input {...register("email")} />
            </div>

            <div className="selector">
                <label>What platform are you using?</label>
                <select {...register("usePlatform")}>
                    {usePlatform.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
            <div className="selector">
                <label>What is your primary residence?</label>
                <select {...register("country")}>
                    {country.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            <div className="selector">
                <label>Support Language Preference</label>
                <select {...register("language")}>
                    {language.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            <div className="selector">
                <label>What can we help you with today?</label>
                <select {...register("helpList")}>
                    {helpList.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            <div className="formContact">
                <label>What is the topic of your request?</label>
                <input {...register("topicRequest")} />
            </div>

            <div className="formContact">
                <label>Please describe your request in detail</label>
                <textarea id="text-area" cols="30" rows="8" {...register("detailDescription")}></textarea>
                {/* <input type={"textarea"} {...register("detailDescription")} /> */}
            </div>



            <button type="submit">Submit</button>












            {/* <label>
                <input ref={register("agreeTerms",{required: true})}
                name="agreeTerms"
                value={true}
                type="checkbox" />
                Agree with terms
            </label>
            {errors.example_1 && <p class="error">{errors.example_1.message}</p>}
            <br /> */}

        </form>
    );
}