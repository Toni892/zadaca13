$(document).ready(function() {

    let nr1 = 0;
    let nr2 = 0;
    let res = 0;
    $(".math").click(function() {
        $("#div0").text("");
        nr1 = $("#nr1").val();
        nr2 = $("#nr2").val();
    });

    $("#add").click(function() {
        res = parseInt(nr1) + parseInt(nr2);
        $("#out").text(res);
    });
    
    $("#min").click(function() {
        res = parseInt(nr1) - parseInt(nr2);
        $("#out").text(res);
    });

    $("#mul").click(function() {
        res = parseInt(nr1) * parseInt(nr2);
        $("#out").text(res);
    });

    $("#div").click(function() {
        if (nr2 != 0) {
            res = parseInt(nr1) / parseInt(nr2);
            $("#out").text(res);
        } else {
            $("#out").text("Nemoguce je podijeliti sa 0.");
        }
    });
});


