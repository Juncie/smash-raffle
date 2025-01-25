const AppUrls = {
    agents: '',
    listings: '',
    api: '',
};
// load the correct aws config options

switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
        AppUrls.api = '';
        break;
    case 'development':
    case 'preview':
        AppUrls.api = '';
        break;
    default:
        AppUrls.api = '';
        break;
}

export default AppUrls;
