<h2 id="publications" class="page-heading">Publications <a class="heading-link" href="{{ site.google_scholar }}" target="_blank" rel="noopener">Google Scholar</a></h2>


<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="pub-content">
      <div class="title">
        {% if link.pdf %}
        <a href="{{ link.pdf }}" target="_blank" rel="noopener">{{ link.title }}</a>
        {% else %}
        <span>{{ link.title }}</span>
        {% endif %}
      </div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
        {% if link.conference_short == "arXiv" %}
        <span class="preprint-mark">Preprint</span>
        {% endif %}
      </div>
    {% if link.code or link.page or link.data or link.bibtex or link.notes or link.others %}
    <div class="links">
      {% if link.code %}
      <a href="{{ link.code }}" class="btn" target="_blank" rel="noopener">Code</a>
      {% endif %}
      {% if link.page %}
      <a href="{{ link.page }}" class="btn" target="_blank" rel="noopener">Project Page</a>
      {% endif %}
      {% if link.data %}
      <a href="{{ link.data }}" class="btn" target="_blank" rel="noopener">Dataset</a>
      {% endif %}
      {% if link.bibtex %}
      <a href="{{ link.bibtex }}" class="btn" target="_blank" rel="noopener">BibTeX</a>
      {% endif %}
      {% if link.notes %}
      <span class="publication-note">{{ link.notes }}</span>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}
    </div>
    {% endif %}
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>
