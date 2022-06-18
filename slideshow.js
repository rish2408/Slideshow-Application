    let i = 0;
    let id;

    function start()
    {
        let images = JSON.parse(localStorage.getItem('images'));
        let container = document.getElementById('container');
        container.style.display = 'block';
        let image = images[i];

        let img = document.querySelector('#img');
        img.src = image;

        id = setInterval(function(){
            i++;
            if(i === images.length)
            {
                i = 0;
            }

            image = images[i];
            img.src = image;

        },3000);
    }

    function pause()
    {
        clearInterval(id);
    }

    function prev() {
        i--;
        let images = JSON.parse(localStorage.getItem('images')) || [];
        if(i==-1) {
            i = images.length - 1;
        }
        let img = document.getElementById('img');
        img.src=images[i];
    }
    
    function next() {
        i++;
        let images = JSON.parse(localStorage.getItem('images')) || [];
        if(i==images.length) {
            i = 0;
        }
        let img = document.getElementById('img');
        img.src=images[i];
    }