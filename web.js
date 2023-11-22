function mostrarMenu(){
    let menuBar = document.getElementById("menu-bar");

    if (menuBar.style.display === "flex"){
        console.log("probando");
        menuBar.style.display = "none";
    } else {
        menuBar.style.display = "flex";
    }
}