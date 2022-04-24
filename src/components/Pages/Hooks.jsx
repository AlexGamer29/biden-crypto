import React, { useState, useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'



function Hooks(props) {
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

        const changeHandler = helpList => {
            setHelpList(helpList)
        }

        return <Select options={options} value={helpList} onChange={changeHandler} defaultValue={helpList} />
    }

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
                <label>What can we help you with today?</label>
            </div>

        </div>
    );
}

export default Hooks;