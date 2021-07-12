function kiemtra(){
    let a = document.getElementById('inNumber').value;
    let text;
    if (a>0){
        a = 'true';
    } else
        if (a<0){
            a = 'false';
        }
    switch (a){
        case "true":
            text = '1';
            break;
        case "false":
            text = '-1';
            break;
        default:
            text='0';
    }
    document.getElementById('output').innerHTML= text;
}