var sidebar = document.getElementById("side");
var sidebutton = sidebar.getElementsByTagName('a');
var toggle = true;
function clicky()
{
    toggle = !toggle
    tog();
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
            sb.width = "0px";
            sb.fontSize = "0px";
            
        }
        sidebar.style.width = "0px"
        // sidebar.style.display = "none";
    }else
    {
        for (var i = 0; i < sidebutton.length; i++)
        {
            sidebutton[i].style.width = "300px";
            sidebutton[i].style.fontSize = "larger";
        }
        sidebar.style.width = "300px";
        sidebar.style.display = "block";
    }
}