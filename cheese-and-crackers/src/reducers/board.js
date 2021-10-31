const boardReducer = (state = [], action) => {
    switch (action.type){
        case 'CREATE_BOARD':
            let array = []
            for (let i = 0; i < action.payload; i++){
                array.push("Space")
            }
            return state.concat(array)
        default:
            return state
    }
}

export default boardReducer

//payload will be determined by user input for board type