export const setSafeCard = ( token ) => {
    return{
        type: "SET_SAFECARD",
        payload: token,
    }
}
export const setcreateSafe = (data) => {
    return {
        type: "SET_SAFE",
        payload: data,
    }
};

export const setUpdateSafe = (data) => {
    return {
        type: "UPDATE_SAFE",
        payload: data,

    }
}

export const setCloseModal = () => {
    return {
      type: "SET_CLOSE",
    };
  };
  
