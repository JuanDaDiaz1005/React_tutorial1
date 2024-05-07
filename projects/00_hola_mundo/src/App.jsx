import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    return (
        <section className='tw-followCards'>

            <TwitterFollowCard
            isFollowing
            userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard
            isFollowing={false}
            userName="pheralb">
                Pablo Hernández
            </TwitterFollowCard>
            

            <TwitterFollowCard
            isFollowing
            userName="elon_musk">
                Elon Musk
            </TwitterFollowCard>

            <TwitterFollowCard
            isFollowing
            userName="cristiano_ronaldo">
                Cristiano Ronaldo
            </TwitterFollowCard>

        </section>

    );
}