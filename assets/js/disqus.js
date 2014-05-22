(function() {
	var disqus_shortname = document.getElementById('disqus_thread').getAttribute('data-disqus-shortname'); // required: replace example with your forum shortname
	var disqus_identifier = document.getElementById('disqus_thread').getAttribute('data-disqus-identifier');

    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();