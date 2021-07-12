function kiemTra(){
    let browser=document.getElementById('input').value;
    let text="";
    switch (browser){
        case 'Edge':
            text ="You have got the Edge!";
            break;
        case 'Chorme':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            text="Okay we support these browsers too";
            break;
        default:
            text="We hope that this page looks ok!";
    }
    document.getElementById('output').innerHTML = text;
}