let array = [];
let str = "";
array[1] ='H';
array[2] ='E';
array[3] ='L';
array[4] ='L';
array[5] ='O';
array[6] =' ';
array[7] ='C';
array[8] ='O';
array[9] ='D';
array[10] ='E';
array[11] ='G';
array[12] ='Y';
array[13] ='M';
array[14] =' ';
array[15] ='S';
array[16] ='À';
array[17] ='I';
array[18] =' ';
array[19] ='G';
array[20] ='Ò';
array[21] ='N';
array[22] ='!';
array[23] ='!';

function fake()
{
    let text = document.getElementById("txt").value;
    for(let i = 1; i <= text.length; i++)
    {
        str = str + array[i];
        if (i === 24)
        {
            str = "";
        }
    }
    document.getElementById("txt").value = str;
    str = "";
    setTimeout("fake()", 1);
}