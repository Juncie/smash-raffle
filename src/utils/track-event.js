import mixpanel from 'mixpanel-browser';
// mixpanel.init('');

function trackEvent(e, v) {
    // mixpanel?.track?.(e, v);
    window?.gtag?.('event', e, v);
}

export function setIdentity(uuid, email, name) {
    // mixpanel?.identify?.(uuid);
    // mixpanel?.people?.set?.({ email, name });
}

export function resetIdentity() {
    // mixpanel?.reset?.();
}

export default trackEvent;
