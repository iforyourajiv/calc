$(document).ready(function() {
    $("button").on("click", function() {
        var val = $(this).val();
        $("#show").val($("#show").val() + val);
    });

    $("#plus").click(function(e) {
        var number = $("#show").val();
        $("#show").val("");
        var opt = "+";
        $.ajax({
            url: 'result.php',
            method: "POST",
            data: { number: number, opt: opt },
            success: function(data) {
                $("#res").removeAttr('disabled', false);
                $("#res").val(data);
                console.log(data);
            },
            error: function(error) {
                console.log(error);
            }

        })


    })

    $("#minus").click(function(e) {
        e.preventDefault();
        var number = $("#show").val();
        $("#show").val("");
        var opt = "-";
        $.ajax({
            url: 'result.php',
            method: "POST",
            data: { number: number, opt: opt },
            success: function(data) {
                $("#res").html(data);
                $("#res").removeAttr('disabled', false);
                $("#res").val(data);
                console.log(data);
            },
            error: function(error) {
                console.log(error);
            }

        })
    })


    $("#mul").click(function(e) {
        e.preventDefault();
        var number = $("#show").val();
        $("#show").val("");
        var opt = "*";
        $.ajax({
            url: 'result.php',
            method: "POST",
            data: { number: number, opt: opt },
            success: function(data) {
                $("#res").removeAttr('disabled', false);
                $("#res").val(data);
                console.log(data);
            },
            error: function(error) {
                console.log(error);
            }

        })
    })

    $("#divison").click(function(e) {
        e.preventDefault();
        var number = $("#show").val();
        $("#show").val("");
        var opt = "/";
        $.ajax({
            url: 'result.php',
            method: "POST",
            data: { number: number, opt: opt },
            success: function(data) {
                $("#res").removeAttr('disabled', false);
                $("#res").val(data);
                console.log(data);
            },
            error: function(error) {
                console.log(error);
            }

        })
    })


    $("#clear").click(function() {
        var opt = "AC";
        $.ajax({
            url: 'result.php',
            method: "POST",
            data: { opt: opt },
            success: function(data) {

            },
            error: function(error) {
                console.log(error);
            }

        })


    })

    $("#cls").click(function() {
        $("#res").val("");
    })


    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        $.ajax({
            url: "result.php",
            type: "POST",
            data: { action: "refresh" },
            success: function(output) {
                $("#show").val("");
                $("#res").val("");

            }
        })
    }
});