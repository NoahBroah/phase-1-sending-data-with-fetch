
function submitData(userName, userEmail) {
    const userInfo = {
        name: userName,
        email: userEmail,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userInfo)
    };

    return fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(data => {
        document.body.append(data.id)
    })
    .catch(error => {
        alert("Bad things!");
        document.body.append(error.message);
    })
}