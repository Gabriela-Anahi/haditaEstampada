"use client";

import * as React from 'react';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if (!token) {
            router.replace("/login");
            return;
        }
    }, [router]);

    return (
        <Box sx={{ width: '100%',
            position: 'fixed',
            bottom: '0rem',
            left: '0rem',
        }}>
            <LinearProgress />
        </Box>
    );
}