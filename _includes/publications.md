<h2 id="publications" class="page-heading">Publications <a class="heading-link" href="{{ site.google_scholar }}" target="_blank" rel="noopener">Google Scholar</a></h2>


<div class="publications">
<section class="publication-section">
<h3 class="publication-section-title">Peer-Reviewed Publications</h3>
<ol class="bibliography">
{% for link in site.data.publications.main %}
{% unless link.category == "preprint" %}
{% include publication-item.html link=link %}
{% endunless %}
{% endfor %}
</ol>
</section>

<section class="publication-section">
<h3 class="publication-section-title">Preprints</h3>
<ol class="bibliography">
{% for link in site.data.publications.main %}
{% if link.category == "preprint" %}
{% include publication-item.html link=link %}
{% endif %}
{% endfor %}
</ol>
</section>
</div>
