// Ambil IdmToken dari localStorage
const idmToken = localStorage.getItem('IdmToken') || localStorage.getItem('idmToken');

if (!idmToken) {
    console.log('IdmToken not found');
}

// Step 1: POST tracking untuk activate session di eu.phrase.com
fetch('https://eu.phrase.com/idm/api/v1/user/organizations/tms-JmUO7bmLOhb55JylunLPw2/product-switcher/tracking', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + idmToken,
        'Origin': 'https://cloud.memsource.com',
        'Referer': 'https://cloud.memsource.com/'
    },
    body: JSON.stringify({
        eventType: 'OPENED_APPLICATION',
        application: 'dashboard'
    })
})
.then(response => {
    // Step 2: Langsung jadi OWNER setelah tracking
    return fetch('https://eu.phrase.com/idm-ui/api/v1/organization/members/ECmJOOf5hbOK7S4jkEsylX/product-access?validateOnly=false', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://eu.phrase.com',
            'Referer': 'https://eu.phrase.com/idm-ui/dashboard'
        },
        body: JSON.stringify({
            platform: {
                productId: 'platform',
                productState: 'OK',
                editable: true,
                role: 'OWNER',
                roleValidity: 'VALID',
                availableRoles: ['OWNER', 'ADMIN', 'MEMBER']
            },
            products: [
                { productId: 'tms', productState: 'OK', editable: true, role: 'ADMIN', roleValidity: 'VALID', availableRoles: ['__no_access__', 'ADMIN', 'PROJECT_MANAGER', 'LINGUIST', 'GUEST', 'SUBMITTER', 'PORTAL_MEMBER'] },
                { productId: 'strings', productState: 'OK', editable: true, role: 'Owner', roleValidity: 'VALID', availableRoles: ['__no_access__', 'Owner', 'Admin', 'ProjectManager', 'Developer', 'Designer', 'Translator', 'Guest'] },
                { productId: 'orchestrator', productState: 'OK', editable: true, role: 'OWNER', roleValidity: 'VALID', availableRoles: ['__no_access__', 'OWNER'] },
                { productId: 'language-ai', productState: 'OK', editable: true, role: 'ADMIN', roleValidity: 'VALID', availableRoles: ['__no_access__', 'ADMIN', 'PORTALER'] }
            ]
        })
    });
})
.then(r => r.text())
.then(t => console.log('OWNER result:', t))
.catch(e => console.log('Error:', e.message));
