export function passwordsAddDataSuccess() {
    return {
        type: "PASSWORDS_ADD_DATA_SUCCESS",
        ok: true
    }
}

export function passwordsAddData(url, object) {
    return fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "http://localhost:8080"
        },
        body: JSON.stringify(object)
    }).then(response => {
        if(!response.ok) throw new Error(response.statusText);
    }).then(() => {
        return passwordsAddDataSuccess();
    });
}

export default passwordsAddData;