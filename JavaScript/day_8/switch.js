var day=prompt("enter the day in english")


switch(day)
{
    case "sunday":console.log('ఆదివారం')
    document.getElementById("day").innerHTML="ఆదివారం"
    break;
    case "monday":console.log('సోమవారం')
    document.getElementById("day").innerHTML="సోమవారం"
    break;
    case "tuesday":console.log('మంగళవారం')
    document.getElementById("day").innerHTML="మంగళవారం"
    break;
    case "wednesay":console.log('బుధవారం')
    document.getElementById("day").innerHTML="బుధవారం"   
    break;
    case "thurday":console.log('గురువారం')
    document.getElementById("day").innerHTML="గురువారం"
    break;
    case "friday":console.log('శుక్రవారం')
    document.getElementById("day").innerHTML="శుక్రవారం"
    break;
    case "saturday":console.log('శనివారం')
    document.getElementById("day").innerHTML="శనివారం"
    break;
    default :
    console.log("enter valid input")
}
