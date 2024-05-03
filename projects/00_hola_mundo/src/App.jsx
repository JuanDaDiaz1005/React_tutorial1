import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='tw-followCards'>

            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing
            userName="midudev"
            name="Miguel Ángel Durán"
            />

            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing={false}
            userName="pheralb"
            name="Pablo Hernández"
            />

            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing
            userName="elon_musk" 
            name="Elon Musk"
            />

            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing
            userName="cristiano_ronaldo"
            name="Cristiano Ronaldo"
            />

        </section>

    );
}