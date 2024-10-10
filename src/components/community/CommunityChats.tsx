import React from 'react'
import CommunityChatsCards from '@/components/ui/CommunityChatsCards'

const CommunityChats = () => {
    return (
        <div>  
            <CommunityChatsCards img={true}/>
            <CommunityChatsCards img={false}/>
            <CommunityChatsCards img={true}/>
            <CommunityChatsCards img={false}/>
            <CommunityChatsCards img={false}/>
            <CommunityChatsCards img={false}/>
            <CommunityChatsCards img={true}/>
            <CommunityChatsCards img={false}/>

        </div>
    )
}

export default CommunityChats