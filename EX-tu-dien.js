var storageEn = ["banana","apple","orange","grape","jackfruit","mango"];
var storageVn = ["chuối","táo","cam","nho","mít","xoài"];
var result = "not found";
function search() {
    var infor = document.getElementById("user").value;

    for (let i = 0;i < storageEn.length;i++) {
        if (infor === storageEn[i]) {
            result = storageVn[i];
        }
    }
    document.getElementById("result").innerHTML = result;
}
function timkiem() {
    var infor = document.getElementById("user").value;

    for (let i = 0; i < storageVn.length; i++) {
        if (infor === storageVn[i]) {
            result = storageEn[i];
        }
    }
    document.getElementById("result").innerHTML = result;
}

