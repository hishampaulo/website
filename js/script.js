$(document).ready(function()
{
    $("#click").click(function()
    {
        $("#click").hide("fast", function()
        {
            $("#slide-down").slideDown("slow");
        });
    });

    $("#click-comments").click(function()
    {
        $("#slide-down-comments").slideToggle("slow");
    });

    var editmode = false;

    $(".btn-edit").on('click', function () {
        if (editmode) {
            $('.editInput').replaceWith(function () {
                return $("<span>", {
                    "class": this.className,
                    text: this.value
                });
            });
            editmode = false;
        } else {
            $('.editInput').replaceWith(function () {
                return $("<input>", {
                    value: this.innerText,
                        "class": this.className
                });
            });
            editmode = true;
        }
    
    });

    $(".about-1-edit").on('click', function () {
        if (editmode) {
            $('.about-1-input').replaceWith(function () {
                return $("<span>", {
                    "class": this.className,
                    text: this.value
                });
            });
            editmode = false;
        } else {
            $('.about-1-input').replaceWith(function () {
                return $("<input>", {
                    value: this.innerText,
                        "class": this.className
                });
            });
            editmode = true;
        }
    
    });
    $(".about-2-edit").on('click', function () {
        if (editmode) {
            $('.about-2-input').replaceWith(function () {
                return $("<span>", {
                    "class": this.className,
                    text: this.value
                });
            });
            editmode = false;
        } else {
            $('.about-2-input').replaceWith(function () {
                return $("<input>", {
                    value: this.innerText,
                        "class": this.className
                });
            });
            editmode = true;
        }
    
    });
    $(".about-3-edit").on('click', function () {
        if (editmode) {
            $('.about-3-input').replaceWith(function () {
                return $("<span>", {
                    "class": this.className,
                    text: this.value
                });
            });
            editmode = false;
        } else {
            $('.about-3-input').replaceWith(function () {
                return $("<input>", {
                    value: this.innerText,
                        "class": this.className
                });
            });
            editmode = true;
        }
    
    });

});