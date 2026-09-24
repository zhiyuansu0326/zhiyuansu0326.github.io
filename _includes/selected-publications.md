<section class="editorial-section selected-work" data-reveal>
  <div class="section-heading">
    <div>
      <span class="section-number">01</span>
      <h2>Selected Research</h2>
    </div>
    <p>Recent work across learning, recommendation systems, and intelligent decision-making.</p>
  </div>

  <div class="selected-paper-list">
    {% for paper in site.data.publications.main limit:4 %}
    <article class="selected-paper">
      <div class="selected-paper-index">0{{ forloop.index }}</div>
      <div class="selected-paper-main">
        <div class="selected-paper-meta">
          <span class="venue-chip">{{ paper.conference_short }}</span>
          <span>{{ paper.conference | split: ',' | last | remove: '.' | strip }}</span>
        </div>
        <h3>{% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener">{{ paper.title }}</a>{% else %}<span>{{ paper.title }}</span>{% endif %}</h3>
        <p>{{ paper.authors }}</p>
      </div>
      {% if paper.pdf %}<a class="paper-arrow" href="{{ paper.pdf }}" target="_blank" rel="noopener" aria-label="Read {{ paper.title }}"><span>Paper</span> ↗</a>{% else %}<span class="paper-status">Forthcoming</span>{% endif %}
    </article>
    {% endfor %}
  </div>

  <a class="section-cta" href="{{ "/publications/" | relative_url }}">View complete publication record <span aria-hidden="true">→</span></a>
</section>
