var sidebar = document.getElementById("side");
var sk = document.getElementById("sk");
var login = document.getElementById("login");

var sidebutton = sidebar.getElementsByTagName('a');
var toggle = false;

var sb = sidebutton[i].style;
function init()
{
    for (var i = 0; i < sidebutton.length; i++)
    {
        sidebutton[i].style.fontSize = "0";
    }

}
// init();

function clicky()
{
    console.log("NOT");
    toggle = !toggle
    tog();
}

function signupclick()
{
    toggle = !toggle;
    if (toggle)
    {
        sk.style.filter = "blur(5px)";
        login.style.display = "block";

    }else{
        sk.style.filter = "blur(0px)";
        login.style.display = "none";
    }
}

function tog()
{
    if (toggle)
    {
        var delay = 0.0;
        for (var i = 0; i < sidebutton.length; i++)
        {
            var sb = sidebutton[i].style;
            delay += 0.05;
            sb.transitionDelay = String(delay) + "s";
            sb.fontSize = "0px";
            
        }
        sidebar.style.width = "0px"
        // sidebar.style.display = "none";
    }else
    {
        for (var i = 0; i < sidebutton.length; i++)
        {
            sidebutton[i].style.transitionDelay = "0s";
            sidebutton[i].style.fontSize = "larger";
        }
        sidebar.style.width = "300px";
    }
}