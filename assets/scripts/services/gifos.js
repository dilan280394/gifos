const CONSTANTS = {
    APIKEY: "C9erXs0wlKxBbwYMS3Xtbq5Uqll8PRBQ",
    BASE_PATH: 'https://api.giphy.com/v1/gifs',
    TRENDING: '/trending'
}
class GiphyService { // servicio para hacer la comunicación con la API de giffy
    
    static get(url, callback) { 
        fetch(url + '?api_key=' + CONSTANTS.APIKEY )
        .then( dataType => dataType.json() )
        .then( data => callback(data) );
    }
    
    static trendingHandler = (data) => { //tratamiento de datos 
       console.log(data)
    }

    static trending() { // consulta en la API
        this.get(CONSTANTS.BASE_PATH + CONSTANTS.TRENDING, this.trendingHandler);
    }
}
export default GiphyService;