import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    const users = [
        {
            id: "1",
            name: 'Miguel Ángel Durán',
            userName: 'midudev',
            isFollowing: true
        },
        {
            id: "2",
            name: 'Real Madrid C.F.',
            userName: 'real_madrid',
            isFollowing: false
        },
        {
            id: "3",
            name: 'Elon Musk',
            userName: 'elon_musk',
            isFollowing: false
        },
        {
            id: "4",
            name: 'Cristiano Ronaldo',
            userName: 'cristiano_ronaldo',
            isFollowing: true
        }
    ]

    return (
        <section className='tw-followCards'>
            {
                users.map(({id, name, userName, isFollowing}) => (
                        <TwitterFollowCard 
                            key={id}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                ))
            }
        </section>

    );
}