$(document).ready(function() {
    loadRSS('https://glammingspace.blogspot.com/atom.xml', '#Newsfeed', 'adarshreddy');   
});

function loadRSS(link, htmlContainer, author) {
    var url = link;
    var container = $(htmlContainer);

    feednami.load(url, function(result){
        if (result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < 8; i++){
                var entry = entries[i];
                container.append("<div class=\"col-md-4\">"+"<div class=\"carbon-example\flex-wrapper\">"+"<div class=\"inner-wrapper\">" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title+"</h2>" +"</a>" 
					+ "</p>"+ "<p class=\"fine-print\">"+author+"</p>"+ "</div>"+"</div>"
					+"</div>");
            }
        }
    });
}