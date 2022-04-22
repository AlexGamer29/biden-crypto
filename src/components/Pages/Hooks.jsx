import React, { useState, useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'

function UsePlatformSelector() {
    const [usePlatform, setUsePlatform] = useState('');
    const options = [
        { value: 'browser', label: 'Web Browser' },
        { value: 'mobile', label: 'Mobile' },
    ];

    const changeHandler = usePlatform => {
        setUsePlatform(usePlatform)
    }

    return <Select options={options} value={usePlatform} onChange={changeHandler} defaultValue={usePlatform} />
}


function CountrySelector() {
    const [country, setCountry] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = country => {
        setCountry(country)
    }

    return <Select options={options} value={country} onChange={changeHandler} defaultValue={country} />
}
function LanguageSelector() {
    const [language, setLanguage] = useState('')
    const options = [
        { value: 'english', label: 'English' },
        { value: 'spanish', label: 'Spanish' },
    ];

    const changeHandler = language => {
        setLanguage(language)
    }

    return <Select options={options} value={language} onChange={changeHandler} defaultValue={language} />
}
function HelpListSelector() {
    const [helpList, setHelpList] = useState('')
    const options = [
        { value: 'english', label: 'Compromised Account' },
        { value: 'spanish', label: 'Account Verification' },
        { value: 'spanish', label: 'Account Management' },
        { value: 'spanish', label: 'Crypto Transfer' },
        { value: 'spanish', label: 'USD Transfer' },
        { value: 'spanish', label: 'Trading' },
        { value: 'spanish', label: 'API Inquiries' },
        { value: 'spanish', label: 'Asset Listing Request' },
        { value: 'spanish', label: 'Bug Report' },
        { value: 'spanish', label: 'Feature Request' },
    ];

    const changeHandler = helpList => {
        setHelpList(helpList)
    }

    return <Select options={options} value={helpList} onChange={changeHandler} defaultValue={helpList} />
}

function Hooks() {
    const [language, setLanguage] = useState(null);
    // const [usePlatform, setUsePlatform] = useState(null);


    return (
        <div className="App">
            <div className="selector" id="platform">
                <label>What platform are you using?</label>
                <UsePlatformSelector />
            </div>

            <div className="selector" id="country">
                <label>What is your primary residence?</label>
                <CountrySelector />
            </div>

            <div className="selector" id="language">
                <label>Support Language Preference</label>
                <LanguageSelector />
            </div>

            <div className="selector" id="help-list">
                <label>
                    What can we help you with today?
                </label>

            </div>

        </div>
    );
}

export default Hooks;