const day = "monday"

switch (day) {
    case monday:
        console.log("Plan Course Structure")
        console.log("Go to coding meetup")
        break;
    case tuesday:
        console.log("Prepare theory videos")
        break
    case wednesday:
    case thursday:
        console.log("Write code example")
        break
    case friday:
        console.log("Record videos")
        break
    case saturday:
    case sunday:
        console.log("Enjoy the weekend")
    default:
        console.log("Not a valid a day")
    break;
}