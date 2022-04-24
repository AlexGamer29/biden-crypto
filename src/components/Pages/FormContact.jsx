import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import countryList from 'react-select-country-list'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import "../css/formContact.css"

const country = countryList().getData();
country.unshift(
    { value: '', label: '-' },
);
console.log(country);

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

export const FormContact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm(
        // {
        //     defaultValues: {
        //         fullname: "",
        //         email: "",
        //         usePlatform: "",
        //         primaryResidence: "",
        //         language: "",
        //         topicRequest: "",
        //         detailDescription: "",
        //     }
        // }
    );

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }

    const usePlatform = [
        { value: '', label: '-' },
        { value: 'browser', label: 'Web Browser' },
        { value: 'mobile', label: 'Mobile' },
    ];

    // const country = useMemo(() => countryList().getData(), [])



    const language = [
        { value: '', label: '-' },
        { value: 'english', label: 'English' },
        { value: 'spanish', label: 'Spanish' },
    ];

    const helpList = [
        { value: '', label: '-' },
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
        <div className="formContainer">
            <form className="formContact" id="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <div className="formContact" id="formFullname">
                    <label>Fullname</label>
                    <input type="text" name="fullname" placeholder="Fullname" {...register("fullname", {
                        required: true,
                        minLength: 8,
                        pattern: /^[a-zA-Z].*[\s\.]*$/
                    })}
                    />
                    {errors?.fullname?.type === "required" && <span>This field is required</span>}
                    {errors?.fullname?.type === "minLength" && (
                        <span>First name must exceed at least 8 characters</span>
                    )}
                    {errors?.fullname?.type === "pattern" && (
                        <span>Alphabetical characters only</span>
                    )}
                </div>


                <div className="formContact selector">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    />
                    {errors?.email?.type === "required" && <span>This field is required</span>}
                    {errors?.email?.type === "pattern" && (<span>Use a valid email address</span>)}
                </div>

                <div className="formContact selector">
                    <label>What platform are you using?</label>
                    <select {...register("usePlatform", {
                        required: true,
                    })}
                    >
                        {usePlatform.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                    {errors?.usePlatform?.type === "required" && <span>Platform cannot be blank</span>}
                </div>

                <div className="formContact selector">
                    <label>What is your primary residence?</label>
                    <select {...register("country", {
                        required: true,
                    })}>
                        {country.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                    {errors?.country?.type === "required" && <span>Country cannot be blank</span>}
                </div>

                <div className="formContact selector">
                    <label>Support Language Preference</label>
                    <select {...register("language", {
                        required: true,
                    })}>
                        {language.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                    {errors?.language?.type === "required" && <span>Support language cannot be blank</span>}
                </div>

                <div className="formContact selector">
                    <label>What can we help you with today?</label>
                    <select {...register("helpList", {
                        required: true,
                    })}>
                        {helpList.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                    {errors?.helpList?.type === "required" && <span>Support language cannot be blank</span>}
                </div>

                <div className="formContact selector">
                    <label>What is the topic of your request?</label>
                    <input type="text" name="topicRequest" {...register("topicRequest", {
                        required: true,
                        minLength: 10,
                        maxLength: 100,
                    })}
                    />
                    {errors?.topicRequest?.type === "required" && <span>This field is required</span>}
                    {errors?.topicRequest?.type === "minLength" && (
                        <span>Topic request must be at least 10 characters</span>
                    )}
                    {errors?.topicRequest?.type === "maxLength" && (
                        <span>Topic request exceed 100 characters</span>
                    )}
                </div>

                <div className="formContact selector">
                    <label>Please describe your request in detail</label>
                    <textarea id="text-area" name="detailDescription" cols="30" rows="8" {...register("detailDescription", {
                        required: true,
                        minLength: 10,
                        maxLength: 700,
                    })}
                    />
                    {errors?.detailDescription?.type === "required" && <span>This field is required</span>}
                    {errors?.detailDescription?.type === "minLength" && (
                        <span>Topic request must be at least 10 characters</span>
                    )}
                    {errors?.detailDescription?.type === "maxLength" && (
                        <span>Topic request exceed 700 characters</span>
                    )}
                </div>

                <button type="submit" id="btn-submit">Submit</button>

            </form>

        </div>
    );
}
