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