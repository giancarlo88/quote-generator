$(document).ready(function(json) {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=111111&format=jsonp&lang=en&jsonp=?", function(json) {
    var quote = json["quoteText"] + " ~ " + json["quoteAuthor"];
    if (json["quoteAuthor"] === 'Anonymous' | json["quoteAuthor"] === '') {
      $("#mes").html(
        "<div class='quote'><h3>" + json["quoteText"] + "</h3></div><div class='author'><h5 class='text-muted'> Anonymous</h5></div>").fadeIn();
      $("#tweetButton").on("click", function() {
        window.open("http://www.twitter.com/home/?status=" + quote.replace(/;/g, " --") + "Anonymous")
      })
    } else {
      $("#mes").html(
        "<div class='quote'><h3>" + json["quoteText"] + "</h3></div>" + "<div class='author'><h5 class ='text-muted'>" + json["quoteAuthor"] + "</h5></div>").fadeIn();
      $("#tweetButton").on("click", function() {
        window.open("http://www.twitter.com/home/?status=" + quote.replace(/;/g, "--"))

      });

      $("#quoteButton").on("click", function() {

        $("#mes").fadeOut(function() {
          $("#tweet").html("<button class='btn' id='tweetButton2'><span class= 'fa fa-lg fa-twitter'><br></span> Tweet This Quote</button></div></div>");
          $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=111111&format=jsonp&lang=en&jsonp=?", function(json) {
            var quote = json["quoteText"] + " ~ " + json["quoteAuthor"];
            if (json["quoteAuthor"] === 'Anonymous' | json["quoteAuthor"] === '') {
              $("#mes").html(
                "<div class='quote'><h3>" + json["quoteText"] + "</h3></div><div class='author'><h5 class='text-muted'> Anonymous</h5></div>").fadeIn();

              $("#tweetButton2").on("click", function() {
                window.open("http://www.twitter.com/home/?status=" + quote.replace(/;/g, " --") + "Anonymous")
              });
            } else {
              $("#mes").html(
                "<div class='quote'><h3>" + json["quoteText"] + "</h3></div>" + "<div class='author'><h5 class ='text-muted'>" + json["quoteAuthor"] + "</h5></div>").fadeIn();

              $("#tweetButton2").on("click", function() {
                window.open("http://www.twitter.com/home/?status=" + quote.replace(/;/g, " --"))
              });

            }

          })

        })
      })

    }

  })
})
