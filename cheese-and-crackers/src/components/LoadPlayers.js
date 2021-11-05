import React from 'react'

const LoadPlayers = (status) =>{
    return(
        <>
            {status.status === true ? <div>Loading Players...</div> : <div>Players loaded!</div>}
        </>
    )
}

export default LoadPlayers