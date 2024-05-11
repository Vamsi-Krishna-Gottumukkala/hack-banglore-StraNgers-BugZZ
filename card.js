var text = document.querySelector("h5")
var friend = document.querySelector("#but-2")
var check=0;

function makefriend()
{
    if(check==0)
    {
        text.innerHTML="Registered" 
        text.style.color="green"
        friend.innerHTML="Unregister"
        friend.style.backgroundColor="red"
        check=1
    }
    else
    {
        text.innerHTML="Register Soon" 
        text.style.color="#666"
        friend.innerHTML="Register"
        friend.style.backgroundColor="rgb(59, 150, 119)"
        check=0

    }
} 
friend.addEventListener("click",makefriend)