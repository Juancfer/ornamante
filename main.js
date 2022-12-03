let products = [
    {
       name: 'hipólito',
       type: 'el hipopótamo',
       src: 'hipolito.jpeg'
    },
    {
       name: 'ceferino',
       type: 'el rinoceronte',
       src: 'ceferino.jpeg'
    },
    {
       name: 'robustiana',
       type: 'la morsa',
       src: 'robustiana.jpeg'
    },
    {
       name: 'rogelio',
       type: 'el zorro',
       src: 'rogelio.jpeg'
    },
    {
        name: 'facundo',
        type: 'el leon',
        src: 'facundo.jpeg'
    },
    {
       name: 'genara',
       type: 'la leona',
       src: 'genara.jpeg'
    },
    {
       name: 'eustaquio',
       type: 'el elefante',
       src: 'eustaquio.jpeg'
    },
    {
       name: 'baldomero',
       type: 'el caballo',
       src: 'baldomero.jpeg'
    },
    {
       name: 'cornelia',
       type: 'la unicornia',
       src: 'cornelia.jpeg'
    },
    {
        name: 'carmina',
        type: 'la gata',
        src: 'carmina.jpeg'
    },
    {
       name: 'marcelino',
       type: 'el pez',
       src: 'marcelino.jpeg'
    },
    {
       name: 'maritrini',
       type: 'la triceratops',
       src: 'maritrini.jpeg'
    },
    {
       name: 'primitivo',
       type: 'el rex',
       src: 'primitivo.jpeg'
    },
    {
       name: 'remedios',
       type: 'la beluga',
       src: 'remedios.jpeg'
    }
   ];

let otherProducts = [
    {
       name: 'lámparas',
       src: 'lampara.jpeg'
    },
    {
       name: 'especiales',
       src: 'especiales.jpeg'
    },
    {
       name: 'embryos',
       src: 'embryos.jpeg'
    },
    {
       name: 'bichines',
       src: 'bichines.jpeg'
    }];

renderProducts();

renderOtherProducts();

function creaElemento(elemento, clase, texto){
    let elementoCrear = document.createElement(elemento);
    if (clase !== '') {
        elementoCrear.classList.add(clase);
    }
    if (texto){
        elementoCrear.textContent = texto;
    }
    return elementoCrear;
}

function renderProducts(){
    let elementProductContainer = document.getElementById('section-products');
    //Rendering every product in the ddbb
    for(let i = 0; i < products.length; i++){        
        //section-article - optimizado
        let elementMainItem = creaElemento('article','section-article');
        elementProductContainer.appendChild(elementMainItem);
        
        
        //details - optimizado con la funcion creaElemento y anadirNodos    
        let elementMainItemImg = creaElemento('img','section-img');
        elementMainItemImg.setAttribute('src', "./assets/imgs/" + products[i].src);

        let elementMainItemName = creaElemento('h3','', products[i].name);
    
        let elementMainItemType = creaElemento('p','', products[i].type);
    
        anadirNodos(elementMainItem,[elementMainItemImg, elementMainItemName, elementMainItemType])
        anadirNodos(elementProductContainer, [elementMainItem]);     
    }
}

function renderOtherProducts(){
    let elementOtherProductContainer = document.getElementById('other-products');
    //Rendering every product in the ddbb
    for(let i = 0; i < otherProducts.length; i++){        
        //section-article - optimizado
        let elementMainItem = creaElemento('article','section-article');
        elementOtherProductContainer.appendChild(elementMainItem);
        
        //details - optimizado con la funcion creaElemento y anadirNodos    
        let elementMainItemImg = creaElemento('img','section-img');
        elementMainItemImg.setAttribute('src', "./assets/imgs/" + otherProducts[i].src);

        let elementMainItemName = creaElemento('h3','', otherProducts[i].name);
    
        anadirNodos(elementMainItem,[elementMainItemImg, elementMainItemName])
        anadirNodos(elementOtherProductContainer, [elementMainItem]);     
    }
}

function anadirNodos(padre, listadoNodos){
    for (i = 0; i < listadoNodos.length; i++){
        padre.appendChild(listadoNodos[i]);
    }
}