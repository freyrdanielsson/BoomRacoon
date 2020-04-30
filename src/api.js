const {
    REACT_APP_SERVICE_URL: baseUrl = 'http://localhost:3001',
} = process.env;


async function request(method, path, data = '') {
    const url = new URL(path, baseUrl);

    const options = {
        method,
        headers: {},
    };

    if (data) {
        options.headers = { 'content-type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    const token = window.localStorage.getItem('token');
    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    let response;
    try {
        response = await fetch(url.href, options);
    } catch (error) {
        console.error('Error fetching', error);
        return {
            status: 500,
            result: {
                errors: [{ message: 'Error fetching data' }]
            }
        }
    }

    const json = await response.json();

    const { status, ok } = response;

    return {
        data: json,
        ok,
        status,
    }
}

export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    patch: request.bind(null, 'PATCH'),
    upload: request.bind(null, 'POST'),
};