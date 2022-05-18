export const screenAppear = (mail, callback) => {
    if (mail) {
        const rect = mail.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
            callback();
        }

    }
}