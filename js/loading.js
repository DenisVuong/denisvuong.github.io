const startLoadingTime = Date.now();

window.addEventListener('load', function () {
    const elapsedTime = Date.now() - startLoadingTime;
    const minLoadingTime = 1000; 
    const remainingTime = minLoadingTime - elapsedTime;
    const delay = remainingTime > 0 ? remainingTime : 0;

    
    setTimeout(function () {
        const loader = document.getElementById('loader');
        loader.classList.add('hide');
        
        setTimeout(function () {
            loader.style.display = 'none';
            document.getElementById('content').style.display = 'block';
            document.body.classList.remove('loading'); 
        }, 1000); 
    }, delay);
});
