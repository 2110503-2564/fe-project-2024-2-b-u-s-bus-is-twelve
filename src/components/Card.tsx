'use client'

import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import React, { useState } from 'react';

export default function Card( { venueName, imgSrc, onRating} : { venueName:string, imgSrc:string, onRating?: (venue: string, rating: number) => void } ) {
    
    const [rating, setRating] = useState<number | null>(null);
    
    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Card Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px]' >
                {venueName}
            </div>

            {
                onRating?
                <Rating className='h-[10%] px-2 ' 
                    value={rating}
                    onChange={(e, newValue) => {
                        setRating(newValue);
                        onRating(venueName, newValue ?? 0);
                    }}
                    onClick={ (e)=>{ e.stopPropagation(); }}                
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                 />
                 : ''
            }

        </InteractiveCard>
    );
}
