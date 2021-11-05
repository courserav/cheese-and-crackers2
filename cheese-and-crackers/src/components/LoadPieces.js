import React from 'react'

const LoadPieces = (status) =>{
    return(
        <>
            {status.status === true ? <div>Loading Pieces...</div> : <div>Pieces are loaded!</div>}
        </>
    )
}

export default LoadPieces