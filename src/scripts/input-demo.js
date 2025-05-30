function RegisterClick(){
    document.getElementById("DetailsContainer").style.display = "block";
    document.getElementById("RegisterContainer").style.display = "none";


    document.getElementById("lblName").innerHTML = document.getElementById("Name").value;
    document.getElementById("lblprice").innerHTML = document.getElementById("Price").value;
    document.getElementById("lblCity").innerHTML = document.getElementById("City").value;
    document.getElementById("lblMfd").innerHTML = document.getElementById("Manufactured").value;

    stockStatus = "";
    stockCheckBox = document.getElementById("Stock");
    if(stockCheckBox.checked) {
        stockStatus = "Available";
    } else {
        stockStatus = "Out of Stock";
    }
    document.getElementById("lbStock").innerHTML = stockStatus;
}

function EditClick(){
    document.getElementById("btnModalRegister").innerHTML = "save";
    document.getElementById("btnModalRegister").className = "btn btn-info";
}
