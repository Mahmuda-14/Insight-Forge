/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"
import useAuth from '@/app/hooks/useAuth';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

export default function withAuth(Component) {
    return function WithAuth(props) {

        const { user, loading } = useAuth();
        // eslint-disable-next-line react-hooks/rules-of-hooks  

        if (loading) {

        }
        useEffect(() => {

            if (!user) {
                redirect('/')
            }
        }, [])

        if (!user) {
            return redirect('/');
        }

        return <Component {...props} />
    }
};

