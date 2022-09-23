console.log("SW: Hello World")

self.addEventListener('install', (event) => {
    // console.log("SW: instalado")
    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("instalaciones finalizadas")
    //         resolve("ok")
    //     }, 3000)
    // })
    // event.waitUltil(myPromise)
})

self.addEventListener('actiate', (event) => {
    console.log("SW: activate")

})


self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    if (event.request.url.includes("background.jpg")) {
        const generic = fetch ('./images/background2.jpg')
        event.respondWith(generic)
    }

    const resp = fetch(event.request.url)
    fetch(event.request.url).then((response)=>{
        if(response.ok){
            event.respondWith(resp)
        }else{
            
            const generic = fetch ('./images/background2.jpg')
            event.respondWith(generic)
        }  
    }).catch((err)=>{
        console.log(err);
    })
    
})  