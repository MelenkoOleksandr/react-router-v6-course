import React from 'react'
import { Outlet } from 'react-router-dom'
import HostHeader from '../components/HostHeader'

const HostLayout = () => {
    return (
        <>
            <HostHeader />
            <Outlet />
        </>
    )
}

export default HostLayout