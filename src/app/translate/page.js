/* eslint-disable react-hooks/rules-of-hooks */
"use client"



import React, { useEffect, useState } from 'react';
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';

const page = () => {
    const languages = [
        { label: 'English', value: '/auto/en' },
        { label: `Русский`, value: '/auto/ru' },
        { label: 'Polski', value: '/auto/pl' },
        { label: 'বাংলা', value: '/auto/bn' } 
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        const initialLanguage = hasCookie('googtrans') ? getCookie('googtrans') : '/auto/en';
        setSelectedLanguage(initialLanguage);
    }, []);

    useEffect(() => {
        const storedTranslatedText = hasCookie('translatedText') ? getCookie('translatedText') : '';
        setTranslatedText(storedTranslatedText);
    }, []);

    const handleLanguageChange = (value) => {
        setCookie('googtrans', value);
        setSelectedLanguage(value);
    }

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    }

    const translateText = () => {
        if (inputText.trim() !== '') {
            const fromLanguage = 'auto'; // Assuming input text is in any language
            const toLanguage = selectedLanguage.slice(-2); // Extracting language code from selected language URL
            const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLanguage}&tl=${toLanguage}&dt=t&q=${encodeURI(inputText)}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const translatedText = data[0][0][0];
                    setTranslatedText(translatedText);
                    setCookie('translatedText', translatedText); // Store translated text in a cookie
                })
                .catch(error => console.error('Error translating text:', error));
        }
    }

    return (
        <>
            <SelectPicker
                data={languages}
                style={{ width: 100 }}
                placement="bottomEnd"
                cleanable={false}
                value={selectedLanguage}
                searchable={false}
                className={'notranslate'}
                menuClassName={'notranslate'}
                onSelect={(value) => handleLanguageChange(value)}
                placeholder="Lang" />

            <input type="text" value={inputText} onChange={handleTextChange} />
            <button onClick={translateText}>Translate</button>

            {translatedText && <div>{translatedText}</div>}
        </>
    );
};

export default page;
