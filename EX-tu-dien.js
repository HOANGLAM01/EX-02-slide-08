function search() {
    var infor = document.getElementById("user").value;
    var storageEn = ["banana","apple","orange","grape","jackfruit","mango"];
    var storageVn = ["chuối","táo","cam","nho","mít","xoài"];
    var index_eng = 0;
    var result = "";

    for (let i = 0;i < storageEn.length;i++) {
        if (infor === storageEn[i]) {
            index_eng = i;
        }

        for (let j = 0; j < storageVn.length;j++) {
                if (index_eng === j){
                    result = storageVn[j];
                }
        }
    }

    document.getElementById("result").innerHTML = result;
}
