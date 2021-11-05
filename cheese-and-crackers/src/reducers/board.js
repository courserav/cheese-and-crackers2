const boardReducer = (state = [], action) => {
    switch (action.type){
        case 'CREATE_BOARD':
            let array = []
            for (let i = 0; i < action.payload; i++){
                for (let i = 0; i < action.payload; i++){
                    array.push("Space")
                }
            }
            return state.concat(array)
        case 'SET_PIECE':
            let newArray = state
            let randNumber = 0
            let turn = false
            if (newArray[action.index] === "Space"){
                newArray[action.index] = action.payload
            }
            else{
                return state
            }
            while (turn === false){
                if (newArray[randNumber] === "Space"){
                    newArray[randNumber] = action.opponent
                    turn = true
                }
                else if (newArray.includes("Space") !== true){
                    turn = true
                }
                else{
                    randNumber = Math.floor((Math.random() * state.length) + 1)
                }
            }
            return state.splice(0, state.length, ...newArray)
        default:
            return state
    }
}

export default boardReducer

//payload will be determined by user input for board type