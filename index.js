var quote = "";
var tweet = ""
var getQuote = function () {
    
    $("#mes").fadeOut(function(){    
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=111111&format=jsonp&lang=en&jsonp=?", function (json) {
        if (json.quoteAuthor === 'Anonymous' | json.quoteAuthor === '') {
                quote = "<div class='quote'><h3>" + json.quoteText + "</h3></div><div class='author'><h5 class='text-muted'> Anonymous</h5></div>";
        tweet = json.quoteText + " — Anonymous";            
        } else {
                quote = "<div class='quote'><h3>" + json.quoteText + "</h3></div>" + "<div class='author'><h5 class ='text-muted'>" + json.quoteAuthor + "</h5></div>"
                tweet = json.quoteText + " — " + json.quoteAuthor;
          };
          $("#mes").html(quote).fadeIn();
        $("#tweet").fadeIn()
            
    })
})}
                      

$("#tweetButton1,#tweetButton2").on("click", function () {
    window.open("http://www.twitter.com/home/?status=" + tweet.replace(/;/g, "&mdash"))

});

$("#quoteButton").on("click", function(){
$("#tweet").fadeOut(getQuote)
})

$(document).ready(getQuote);
