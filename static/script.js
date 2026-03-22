$(document).ready(function () {
    $("#predictionForm").submit(function (e) {
        e.preventDefault();

        let features = [
            $("#age").val(),
            $("#bp").val(),
            $("#sg").val(),
            $("#al").val(),
            $("#su").val(),
            $("#rbc").val(),
            $("#pc").val(),
            $("#pcc").val(),
            $("#ba").val(),
            $("#bgr").val(),
            $("#bu").val(),
            $("#sc").val(),
            $("#sod").val(),
            $("#pot").val(),
            $("#hemo").val(),
            $("#pcv").val(),
            $("#wc").val(),
            $("#rc").val(),
            $("#htn").val(),
            $("#dm").val(),
            $("#cad").val(),
            $("#appet").val(),
            $("#pe").val(),
            $("#ane").val()
        ];

        $.ajax({
            url: "/predict",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ features: features }),
            success: function (response) {
                $("#result").html("<h4>" + response.prediction + "</h4>");
            }
        });
    });
});
