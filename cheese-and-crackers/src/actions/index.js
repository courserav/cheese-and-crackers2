//Index for redux actions
export const createBoard = (layout) => {
    return{
        type: 'CREATE_BOARD',
        payload: layout
    }
}
