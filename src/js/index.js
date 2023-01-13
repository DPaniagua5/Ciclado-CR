
function Consultar() {
    
    fetch("https://api.clashroyale.com/v1/players/%23JC9LC0Q9/upcomingchests", {
        "method": "GET",
        "headers": {
            
            "Content-Type": "aplication/json",
            "Authorization": "Bearer "+token
                }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJkNGM5NDM0LTEwNjEtNDk0NS05OTEyLTYwYzAzY2QyNWY3ZCIsImlhdCI6MTY3MzYzODgxNiwic3ViIjoiZGV2ZWxvcGVyLzlhZjg4NjMxLTYwZDctMGFjNy05NGMyLTE5MGEzZjkxYjEyNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC44Ni41MC4xMzkiLCI0NS4yMjkuNDMuOTciXSwidHlwZSI6ImNsaWVudCJ9XX0.EQzEvdjhGClEw54a7t7bnEmiBZJ3cL8oblmVGqIuGNhJ8Dh7xIkikriBjY7Tt1ZtZAmb_OjrM4VOd7wP9bVMeA";
/*
    var headers = {
        "Content-Type": "aplication/json",
        "Authorization": "Bearer" + token
    };
  */      
}




function goleadores(){
    var header = document.querySelector('header');
    var section = document.querySelector('section');
  
    var requestURL = 'https://api.clashroyale.com/v1/players/%23JC9LC0Q9/upcomingchests'
  
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.setRequestHeader("Authorization",  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJkNGM5NDM0LTEwNjEtNDk0NS05OTEyLTYwYzAzY2QyNWY3ZCIsImlhdCI6MTY3MzYzODgxNiwic3ViIjoiZGV2ZWxvcGVyLzlhZjg4NjMxLTYwZDctMGFjNy05NGMyLTE5MGEzZjkxYjEyNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC44Ni41MC4xMzkiLCI0NS4yMjkuNDMuOTciXSwidHlwZSI6ImNsaWVudCJ9XX0.EQzEvdjhGClEw54a7t7bnEmiBZJ3cL8oblmVGqIuGNhJ8Dh7xIkikriBjY7Tt1ZtZAmb_OjrM4VOd7wP9bVMeA");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.send();
  
    request.onload = function() {
      var datos = request.response;
      populateHeader(datos);
      showHeroes(datos);
    }
}
