function ride(){
    var ride1 = document.getElementById("ride1").value;
    var ride2 = document.getElementById("ride2").value;
    var jia1 = document.getElementById("jia1").value;
    var jia2 = document.getElementById("jia2").value;
    var cde = document.getElementById("cde");
    var jde = document.getElementById("jde");
    cde.innerText=ride1*ride2;
    jde.innerText=jia1-jia2;
}
function show() {
    document.querySelector("#show_photo_hr > hr:nth-child("+ show_i+ ")").style.backgroundColor="rgba(135, 207, 235, 0.3)";
    show_i++;
    if (show_i > show_many){
        show_i=1
    }
    document.getElementById("show_photo").src="./static/photo/show/"+show_i+".jpg";
    document.querySelector("#show_photo_hr > hr:nth-child("+show_i+")").style.backgroundColor="rgb(135, 207, 235)";
}
function control_notice() {
    look_time++;
    console.log("你已经看我们的网页"+look_time+"分钟了!\n再次感谢您前来欣赏，请牢记我们的官网!\n http://112.124.33.59:8855")
}
function login_open() {
    var loginbg = document.getElementById("loginbg");
    var loginbox = document.querySelector(".loginbox");
    loginbg.style.display = 'block';
    loginbox.style.display = 'block';
}
function login_close() {
    var loginbg = document.getElementById("loginbg");
    var loginbox = document.querySelector(".loginbox");
    loginbg.style.display = 'none';
    loginbox.style.display = 'none';
}
function no_phone_close() {
    var bg = document.getElementById("no_phone_bg");
    var box = document.getElementById("no_phone_box");
    bg.style.display = 'none';
    box.style.display = 'none';
}
var show_i = 1;
var show_many = 5;
for(var show_many_i = 0; show_many_i < show_many; show_many_i++) {
    document.getElementById('show_photo_hr').appendChild(document.createElement('hr'));
}
id_show=setInterval(show,2500);
console.log("踏入星泉小说网，\n犹如步入一个无尽的文学星空。\n在这里，\n每一部小说都是一颗璀璨的星辰，\n照亮您的心灵之旅，\n让您沉浸在奇妙的故事世界，\n感受文字的魅力与力量。");
var look_time = 0;
id_control=setInterval(control_notice,60000);