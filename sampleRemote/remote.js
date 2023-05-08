$("#sengine a").on("click", function (e) {
            $("#sengine a.active").toggleClass("active");
            $(e.target).toggleClass("active");
            $("#search-fav").attr(
                "src",
                $(e.target)
                    .data("url")
                    .match(/https{0,1}:/ / S +//)[0] + "/favicon.ico"
          );
        });
        $(".search").on("click", function (e) {
            var url = $("#sengine a.active").data("url");
            url = url.replace(/$s/, $("#searchinput").val());
            window.open(url);
        });
        $("#searchinput").bind("keypress", function () {
            if (event.keyCode == 13) {
                $(".search").click();
            }
        });
        $("#menubtn").on("click", function (e) {
            $("#seller").modal("show");
        });
