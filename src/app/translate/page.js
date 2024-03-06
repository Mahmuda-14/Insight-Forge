/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useEffect, useState } from 'react';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import Image from 'next/image';
import Footer from '@/components/shared/footer/Footer';

const Page = () => {
    const languages = [
        { label: 'English', value: '/auto/en' },
        { label: 'Polski', value: '/auto/pl' },
        { label: 'हिन्दी', value: '/auto/hi' },
        { label: 'Français', value: '/auto/fr' },
        { label: 'Español', value: '/auto/es' },
        { label: 'Deutsch', value: '/auto/de' },
        { label: 'Italiano', value: '/auto/it' },
        { label: 'Português', value: '/auto/pt' },
        { label: '日本語', value: '/auto/ja' },
        { label: '中文', value: '/auto/zh' },
        { label: '한국어', value: '/auto/ko' },
        { label: 'বাংলা', value: '/auto/bn' },
    ];

    const [inputLanguage, setInputLanguage] = useState(null);
    const [outputLanguage, setOutputLanguage] = useState(null);
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [showTranslator, setShowTranslator] = useState(false);
    const [showGetStarted, setShowGetStarted] = useState(true);

    useEffect(() => {
        const initialInputLanguage = hasCookie('inputLanguage') ? getCookie('inputLanguage') : '/auto/en';
        setInputLanguage(initialInputLanguage);
        const initialOutputLanguage = hasCookie('outputLanguage') ? getCookie('outputLanguage') : '/auto/en';
        setOutputLanguage(initialOutputLanguage);
        setTranslatedText('');
        setCookie('translatedText', '');
    }, []);

    useEffect(() => {
        const storedTranslatedText = hasCookie('translatedText') ? getCookie('translatedText') : '';
        setTranslatedText(storedTranslatedText);
    }, []);

    const handleInputLanguageChange = (value) => {
        setCookie('inputLanguage', value);
        setInputLanguage(value);
    }

    const handleOutputLanguageChange = (value) => {
        setCookie('outputLanguage', value);
        setOutputLanguage(value);
    }

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    }

    const translateText = () => {
        if (inputText.trim() !== '' && inputText.includes('.')) {
            const fromLanguage = inputLanguage.slice(-2);
            const toLanguage = outputLanguage.slice(-2);
            const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLanguage}&tl=${toLanguage}&dt=t&q=${encodeURI(inputText)}`;
                
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const translatedText = data[0][0][0];
                    setTranslatedText(translatedText);
                    setCookie('translatedText', translatedText);
                })
                .catch(error => 
                    {toast.error("Something was wrong");}
                    );
        }
    }
    

    const handleGetStarted = () => {
        setShowGetStarted(false);
        setShowTranslator(true);
       
    }

    


    return (
        <div>
            <DrawerAppBar></DrawerAppBar>





<div className='mb-[100px]'>
                <div className='flex justify-around items-center'>
                    <Image src="https://i.ibb.co/YDq265T/download-2.gif" alt="cover" width={300} height={300} />
                </div>
               
                
                <p className='text-black lg:text-[100px] md:text-[150px] sm:text-[50px] font-bold text-center'>Trans<span className='text-[#29465B]'>late</span></p>
              
                <p className='text-[#4f675b] text-[30px] font-bold text-center'>Breaking Language Barriers, One Word at a Time.</p>
                
            </div>
<div className='flex justify-around items-center mb-[80px]'>
{showGetStarted && 
( <button onClick={handleGetStarted} className="p-2 bg-[#4f675b] text-white rounded-md w-[150px] h-[50px] mb-[50px]">Get Started</button> )}
</div>



            {showTranslator && (
              <div>
                <p className='text-center text-black text-[15px]'>Note: <span className='text-red-500 text-[25px]'>*</span>When you translate, you should use full stop (.) without any space.</p>
                <div className='flex flex-col lg:flex-row justify-around items-center mt-[50px]'>
                    <div>
                        <div className='flex justify-center items-center'> 
                            <p className='text-[#29465B] text-[25px] font-bold'>
                            From:
                            </p>
                            <select className='w-[300px] h-[50px] border border-[#4f675b] ml-[10px] bg-[#AFDCEC]'  onChange={(e) => handleInputLanguageChange(e.target.value)}>
                                {languages.map((language, index) => (
                                    <option key={index} value={language.value}>{language.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='my-[50px]'>
                            <textarea cols="40" rows="18" className='border border-[#4f675b] p-[20px] ' onChange={handleTextChange}></textarea>
                        </div>
                    </div>
                   
                    <div>
                    <div className='flex justify-center items-center'> 
                            <p className='text-[#29465B] text-[25px] font-bold'>
                            To:
                            </p>
                            <select className='w-[300px] h-[50px] border border-[#4f675b] ml-[10px] bg-[#AFDCEC]' onChange={(e) => handleOutputLanguageChange(e.target.value)}>
                                {languages.map((language, index) => (
                                    <option key={index} value={language.value}>{language.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='my-[50px]'>
                            <textarea cols="40" rows="18" className='border border-[#4f675b] p-[20px] ' value={translatedText} readOnly></textarea>
                           
                        </div>
                    </div>
                </div>
                </div>
            )}

            {showTranslator && (
                <div className='flex justify-around items-center'>
                    <button onClick={translateText} className="p-2 bg-[#4f675b] text-white rounded-md w-[150px] h-[50px] mb-[200px]">Translate</button>
                </div>
            )}
             <Footer></Footer>
        </div>
    );
};

export default Page;
