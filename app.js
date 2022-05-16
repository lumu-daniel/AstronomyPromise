$(document).ready(
    function () {
        $("#view_button").click(getPic);
    });

function getPicture () {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + $("#date").val(),{
        mode: "no-cors"
    })
    .then((data)=>{
        showPicture(data)
    })
    .catch(err=>{
        console.log(err)
        noPicture(err)
    })
};

function showPicture(data) {
    $("#title").text(data.title);
    $("#picture").attr("src", data.url);
};

function noPicture(error) {
    alert(error);
};


const getPic = async ()=>{
    try {
        const promis = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + $("#date").val(),{
            mode: "no-cors"
        })
        if(promis.body!=null){
            const data = await promis.json( )
            showPicture(data)
        }else{
            console.log("Response body is empty")
            noPicture("Response body is empty")
        }
    } catch (err) {
        console.log(err)
        noPicture(err.message)
    }
}