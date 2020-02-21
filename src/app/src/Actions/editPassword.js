export function passwordsEditDataSuccess() {
    return {
        type: "PASSWORDS_EDIT_DATA_SUCCESS",
        ok: true
    }
}

export function passwordsEditData(url, object) {
    return fetch(url, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "http://localhost:3000"
        },
        body: JSON.stringify(object)
    }).then(response => {
        if(!response.ok) throw new Error(response.statusText);
    }).then(() => {
        return passwordsEditDataSuccess();
    });
}

export default passwordsEditData;