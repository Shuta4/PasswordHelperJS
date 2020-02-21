export function passwordsDeleteDataSuccess() {
    return {
        type: "PASSWORDS_DELETE_DATA_SUCCESS",
        ok: true
    }
}

export function passwordsDeleteData(url) {
    return fetch(url, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "http://localhost:3000"
        }
    }).then(response => {
        if(!response.ok) throw new Error(response.statusText);
    }).then(() => {
        return passwordsDeleteDataSuccess();
    });
}

export default passwordsDeleteData;