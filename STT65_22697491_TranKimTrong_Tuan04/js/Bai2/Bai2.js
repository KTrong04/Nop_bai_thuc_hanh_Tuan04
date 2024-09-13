function kiemTra_firstName() {
    var first_name = document.getElementByIdI("first_name").value;

    if (first_name > 1) {
        Loi.sttyle.display = "block";
        Dung.sttyle.display = "none";
        document.getElementById("first_name").classList.add("invalid")
    } else {
        Loi.sttyle.display = "none";
        Dung.sttyle.display = "block";
        document.getElementById("first_name").classList.remove("invalid")
    }
}