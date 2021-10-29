const initialState = {
    dataSafeCard: [],
    dataSafe: [],
    statusModal: false,
    updateSafe: []
}

const CreateSafeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SAFECARD":
            return {
               ...state,
               dataSafeCard: [action.payload]
            };
        case "SET_SAFE":
            return {
               ...state,
               dataSafe: [action.payload]
            };
        case "UPDATE_SAFE":
            return {
                ...state,
                updateSafe: [action.payload]
            }
        case "SET_CLOSE":
            return {
                ...state,
                statusModal: !state.statusModal,
            }
        default:
            return state;
        }
};
export default CreateSafeReducer
