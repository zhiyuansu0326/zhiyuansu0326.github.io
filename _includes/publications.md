{% assign peer_reviewed = site.data.publications.main | where_exp: "paper", "paper.conference_short != 'arXiv'" %}
{% assign preprints = site.data.publications.main | where: "conference_short", "arXiv" %}

<header class="page-intro publications-intro" data-reveal>
  <h1>Publications</h1>
  <div class="publications-intro-meta">
    <span class="section-ornament" aria-hidden="true"></span>
    <a class="page-external-link" href="{{ site.google_scholar }}" target="_blank" rel="noopener">Google Scholar <span aria-hidden="true">↗</span></a>
  </div>
</header>

<section class="publication-group" data-reveal>
  <div class="publication-group-heading"><span>01</span><h2>Peer-reviewed Research</h2><small>{{ peer_reviewed.size }} papers</small></div>
  <ol class="bibliography">
    {% for paper in peer_reviewed %}
    <li class="publication-card">
      <span class="publication-index">0{{ forloop.index }}</span>
      <div class="publication-meta"><span class="venue-chip">{{ paper.conference_short }}</span><span>{{ paper.conference | split: ',' | last | remove: '.' | strip }}</span></div>
      <div class="publication-body">
        <h3>{% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener">{{ paper.title }}</a>{% else %}<span>{{ paper.title }}</span>{% endif %}</h3>
        <p class="publication-authors">{{ paper.authors }}</p>
        <p class="publication-venue">{{ paper.conference }}</p>
        {% if paper.code or paper.page or paper.data or paper.bibtex or paper.pdf %}
        <div class="publication-links">
          {% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener">Paper ↗</a>{% endif %}
          {% if paper.code %}<a href="{{ paper.code }}" target="_blank" rel="noopener">Code ↗</a>{% endif %}
          {% if paper.page %}<a href="{{ paper.page }}" target="_blank" rel="noopener">Project ↗</a>{% endif %}
          {% if paper.data %}<a href="{{ paper.data }}" target="_blank" rel="noopener">Dataset ↗</a>{% endif %}
          {% if paper.bibtex %}<a href="{{ paper.bibtex }}" target="_blank" rel="noopener">BibTeX ↗</a>{% endif %}
        </div>
        {% else %}
        <span class="publication-forthcoming">Forthcoming</span>
        {% endif %}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>

{% if preprints.size > 0 %}
<section class="publication-group preprint-group" data-reveal>
  <div class="publication-group-heading"><span>02</span><h2>Preprints</h2><small>{{ preprints.size }} papers</small></div>
  <ol class="bibliography">
    {% for paper in preprints %}
    <li class="publication-card">
      <span class="publication-index">0{{ forloop.index }}</span>
      <div class="publication-meta"><span class="venue-chip preprint-chip">Preprint</span><span>{{ paper.conference }}</span></div>
      <div class="publication-body">
        <h3>{% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener">{{ paper.title }}</a>{% else %}<span>{{ paper.title }}</span>{% endif %}</h3>
        <p class="publication-authors">{{ paper.authors }}</p>
        {% if paper.pdf %}<div class="publication-links"><a href="{{ paper.pdf }}" target="_blank" rel="noopener">Read preprint ↗</a></div>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>
{% endif %}
