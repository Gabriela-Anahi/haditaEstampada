"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import { Navbar, ProductCard } from '@/components/index';

export default function Home() {

    return (
        <Box>
            <Navbar />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, px: 1 }}>
                <ProductCard />
                <ProductCard />
            </Box>
        </Box>
    );
}