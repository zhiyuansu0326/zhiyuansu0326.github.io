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
      </div>
    {% if link.code or link.page or link.data or link.bibtex or link.notes or link.others %}
    <div class="links">
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.data %} 
      <a href="{{ link.data }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:12px;">Dataset</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c; font-weight:600">{{ link.notes }}</i></strong>
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
