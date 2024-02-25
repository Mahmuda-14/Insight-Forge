import { useEffect, useState } from 'react';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

const useTranslation = () => {
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
    };

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    };

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
    };

    return {
        selectedLanguage,
        inputText,
        translatedText,
        handleLanguageChange,
        handleTextChange,
        translateText
    };
};

export default useTranslation;