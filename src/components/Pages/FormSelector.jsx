import { useState } from "react";

import React from 'react'

const FormSelector = (props) => {
    const [UsePlatform, setUsePlatform] = useState("-");
    const [PrimaryResidence, setPrimaryResidence] = useState("-");
    const [Language, setLanguage] = useState("-");
    const [HelpList, setHelpList] = useState("-");
    const [TopicRequest, setTopicRequest] = useState("-");

    const { label, errorMessage, onChange, id, ...inputProps } = props;
    
    const handleFocus = (e) => {
        setUsePlatform(true);
        setPrimaryResidence(true);
        setLanguage(true);
        setHelpList(true);
        setTopicRequest(true);
    };

    return (
        <div className="formSelector">
            <label>
                Haha cc
            </label>
        </div>
    )
}

export default FormSelector