
    $(function(){
        $(".home").typed({
            strings: ["George He"],
            startDelay: 0,
            showCursor: true,
            typeSpeed: 100,
            onStringTyped: function() {document.getElementsByClassName("typed-cursor")[0].className="empty";}
        });
        $(".hack").typed({
            strings: ["Hacker. Developer. Learner"],
            startDelay: 2800,
            showCursor: true,
            typeSpeed: 100,
            onStringTyped: function() {document.getElementsByClassName("typed-cursor")[0].className="empty";}
        });
    });
