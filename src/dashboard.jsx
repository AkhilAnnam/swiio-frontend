import React from 'react'
import Header from './Components/Header/Header'
import Mac from './Components/Mac/Mac'
import Custom from './Components/Custom/Custom'
import Artwork from './Components/Artwork/Artwork'
import Integration from './Components/Integration/Integration'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Mac />
            <Custom />
            <Artwork />
            <Integration />
        </div>
    )
}

export default Dashboard