function launch(){
    var num=random(1911,2016);
    console.log(num);
    d3.select("p").text(num);
};

function random(N,M){
    return Math.ceil(Math.random()*(M-N)+N);
};
//<!--計算平方-->
function square(){
    var num=d3.select('.number').property("value");
    console.log(num);
    d3.select('.number').property("value",num*num);//<!--計算平方 num*num回傳到value-->
};

