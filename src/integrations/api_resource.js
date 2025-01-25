let endpoint;
let s3;
// load the correct aws config options

switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
        endpoint = '';
        s3 = { endpoint: '' };
        break;
    case 'development':
    case 'preview':
        endpoint = '';
        s3 = { endpoint: '' };
        break;
    default:
        endpoint = '';
        s3 = { endpoint: '' };
        break;
}

const ApiResource = { endpoint, s3 };

export default ApiResource;
