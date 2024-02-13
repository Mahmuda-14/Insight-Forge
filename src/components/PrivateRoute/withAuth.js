/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"
import useAuth from '@/app/hooks/useAuth';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import loadingAnimation from '../../assets/loadingAnimation.json'
import Lottie from 'lottie-react';

export default function withAuth(Component) {
    return function WithAuth(props) {

        const { user, loading } = useAuth();
        // eslint-disable-next-line react-hooks/rules-of-hooks  

        if (loading) {
            <Lottie animationData={loadingAnimation}></Lottie>
        }
        useEffect(() => {

            if (!user) {
                redirect('/login')
            }
        }, [])

        if (!user) {
            return redirect('/login');
        }

        return <Component {...props} />
    }
};

