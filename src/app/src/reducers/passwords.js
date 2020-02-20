export function passwords(state = [], action) {
    switch (action.type) {
        case "PASSWORDS_FETCH_DATA_SUCCESS":
            return action.passwords;
        default: return state;
    }
}