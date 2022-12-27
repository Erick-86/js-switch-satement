const day = "monday"

switch (day) {
    case 'monday':
        console.log("Plan Course Structure")
        console.log("Go to coding meetup")
        break;
    case 'tuesday':
        console.log("Prepare theory videos")
        break
    case 'wednesday':
    case 'thursday':
        console.log("Write code example")
        break
    case 'friday':
        console.log("Record videos")
        break
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend")
        break
    default:
        console.log("Not a valid a day")
    break;
}

//Same Logig Using if/else Statement
if(day === "monday") {
    console.log("Plan Course Structure")
    console.log("Go to coding meetup")
} else if (day === "tuesday"){
    console.log("Prepare theory videos")
} else if (day === "wednesday" || "thursday"){
    console.log("Write code example")
} else if (day === "friday"){
    console.log("Record videos")
} else if (day === "saturday" || "sunday") {
    console.log("Enjoy the weekends")
} else{
    console.log("Not a valid day")
}