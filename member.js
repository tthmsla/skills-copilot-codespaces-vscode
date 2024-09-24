function skillsmember() {
    var member = document.getElementById("member").value;
    if (member == "1") {
        location.href = "skills.html";
    } else {
        alert("Please enter a valid member number.");
    }
}