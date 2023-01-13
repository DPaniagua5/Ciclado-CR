
function Consultar() {
    
    fetch("https://api.clashroyale.com/v1/players/%23JC9LC0Q9/upcomingchests", {
        "method": "GET",
        "headers": {
            "Content-Type": "aplication/json",
            "Authorization": "Bearer " + token
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVhMGNiNjIzLTMzMWEtNDE3My1hM2EzLWVmZWJhOWE3ODIxNCIsImlhdCI6MTY3MzYzMTU3MCwic3ViIjoiZGV2ZWxvcGVyLzlhZjg4NjMxLTYwZDctMGFjNy05NGMyLTE5MGEzZjkxYjEyNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS4yMjkuNDMuOTciXSwidHlwZSI6ImNsaWVudCJ9XX0.tNhskp-INqBbv7QbbdrIKmK0lYOJBHE-dSHx6XeQZZTMGLnG7_R13GgO6o4yUL23YjWAOodWIVnZr_n1C_91cA";
/*
    var headers = {
        "Content-Type": "aplication/json",
        "Authorization": "Bearer" + token
    };
  */  

    
}
