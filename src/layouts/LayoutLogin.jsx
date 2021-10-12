import React from 'react'

const LayoutLogin = ({children}) => {
    return (
        <div className = 'LoginContainer'>
            <main className = 'mainContainer'>
                {children}
            </main>
        </div>
    )
}

export default LayoutLogin
