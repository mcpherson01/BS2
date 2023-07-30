<script>
$(document).ready(function() {
  // URL of the RSS feed
  var rssFeedUrl = "https://www.cshub.com/rss/articles";

  // Fetch the RSS feed using jQuery's AJAX method
  $.ajax({
    url: rssFeedUrl,
    dataType: "xml",
    success: function(data) {
      // Parse the XML data
      var items = $(data).find("item");
      var feedContent = "";

      // Loop through each item in the feed and generate HTML to display it
      items.each(function() {
        var title = $(this).find("title").text();
        var link = $(this).find("link").text();
        var description = $(this).find("description").text();
        var pubDate = new Date($(this).find("pubDate").text()).toLocaleDateString();

        feedContent += '<div class="rss-feed-item">';
        feedContent += '<h3><a href="' + link + '">' + title + '</a></h3>';
        feedContent += '<p class="pub-date">' + pubDate + '</p>';
        feedContent += '<p class="description">' + description + '</p>';
        feedContent += '</div>';
      });

      // Append the feed content to the container
      $("#rss-feed-container").html(feedContent);
    },
    error: function() {
      // Handle error if the feed cannot be fetched
      $("#rss-feed-container").html("<p>Failed to load RSS feed.</p>");
    }
  });
});
</script>
