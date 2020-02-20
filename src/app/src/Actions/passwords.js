export function passwordsFetchDataSuccess(passwords) {
    return {
        type: "PASSWORDS_FETCH_DATA_SUCCESS",
        passwords
    }
}

export function passwordsFetchData(url) {
    return (dispatch)=> {
        fetch(url, {
            headers:{
                "accepts":"application/json",
                "Origin": "http://localhost:8080"
            }
        }).then(response => {
            if(!response.ok) throw new Error(response.statusText);
            return response;
        }).then(response => {
            response.json().then(jsondata => {
                dispatch(passwordsFetchDataSuccess(jsondata))
            })
        })
    }
}