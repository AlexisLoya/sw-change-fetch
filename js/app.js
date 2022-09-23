// check if service worker is working
const url = window.location + "";
if(navigator.serviceWorker){
    // reigster the service worker using root path
    // identificar si estoy en loca o en githubpages
    if (url.includes('github.io')) {
        navigator.serviceWorker.register('./sw-change-fetch/sw.js')
    } else {
        navigator.serviceWorker.register('./sw.js')
    }
    
}