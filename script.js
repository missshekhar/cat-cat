    const btn = document.querySelector(".btn-generate");
    const cat = document.querySelector(".cat");
    const url = "https://aws.random.cat/meow";

    const getCat = async() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) =>{
            cat.innerHTML = `<img class="cat-img" src="${data.file}"  alt="random cat item" />`
        })
    }

    btn.addEventListener("click", getCat);
