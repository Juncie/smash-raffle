export default function checkProtocol(value) {
    if (!value) return '';
    if (!value?.includes?.('https://')) {
        return `https://${value}`;
    }

    return value;
    // if (!value) return '';
    // Replace any existing protocol with 'https://'
    // return value.replace(/^.*:\/\//i, 'https://');
}
