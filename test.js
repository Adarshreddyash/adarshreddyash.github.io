<html>
<script src="https://cdn.rawgit.com/sekando/feednami-client/master/releases/1.0.2.min.js"></script>
<script>
  var url = 'https://devblog.ricky.me/rss.xml'
  feednami.load(url,function(result){
    if(result.error){
      console.log(result.error)
    }
    else{
      var entries = result.feed.entries
      for(var i = 0; i < entries.length; i++){
        var entry = entries[i]
        console.log(entry.title)
      }
    }
  })
</script>
</html>
