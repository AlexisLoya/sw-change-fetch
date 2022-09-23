// check if service worker is working
const url = window.location;
if(navigator.serviceWorker){
    // reigster the service worker using root path
    // identificar si estoy en loca o en githubpages
    navigator.serviceWorker.register("/sw.js")
    
}