function generateGif() {
    var userSearch = (document.querySelector(".search-box").value);

    var apiKey = "YnJOE3NKeiCX2CUfN88HD4dq24ceOkuB";
    var giphyURL = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + userSearch + "&rating=pg";

        fetch(giphyURL).then(function(data) {
            return data.json()
        }).then(function(json) {
            var gifPath = json.data[0].images.fixed_height.url;
            var getResults = document.querySelector(".results");
            getResults.innerHTML = "<img src=" + gifPath + ">";
        });
}

document.querySelector(".search-box").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        generateGif();
    }
});