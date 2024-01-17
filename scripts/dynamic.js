bgL=()=>{   document.getElementById("cover").style.backgroundColor="rgba(112, 112, 112, 0.616)"
}
bgD=()=>{   document.getElementById("cover").style.backgroundColor="#0a0a0a"
document.getElementById("cover").style.color="white"
}
changeUsername=()=> {
    var username = document.getElementById("userNameField").value;
    if(username != "" || username != null) {
        document.getElementById("cover").style.backgroundColor = "green"
        document.getElementById("userNameText").textContent = username;
    }
}