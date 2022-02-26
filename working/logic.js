// var hm = document.getElementsByClassName("hamburger");
var sideBar = document.getElementById("sb");

var toggle = false;
function clicked()
{
    toggle = !toggle
    tog();
}
function tog(on)
{
    if (toggle)
    {
        sideBar.style.width = "255px";
    }else
    {
        sideBar.style.width = 0;
    }
}