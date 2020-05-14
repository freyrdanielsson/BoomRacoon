export function checkForIOS() {
    // Don't prompt if already installed
    if (navigator.standalone) {
        return false;
    }
    
    // should probably add 'last time prompted' and stuff irl
    const ua = window.navigator.userAgent;
    const webkit = !!ua.match(/WebKit/i);
    const isIPad = !!ua.match(/iPad/i);
    const isIPhone = !!ua.match(/iPhone/i)
    const isIOS = isIPad || isIPhone;
    const isSafari = isIOS && webkit && !ua.match(/CriOS/i);

    const prompt = isIOS && isSafari;

    return prompt;
}