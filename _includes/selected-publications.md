<section class="editorial-section selected-work" data-reveal>
  <div class="section-heading">
    <div>
      <span class="section-number">01</span>
      <h2>Selected Research</h2>
    </div>
    <span class="section-ornament" aria-hidden="true"></span>
  </div>

  <div class="selected-paper-list">
    {% assign selected_count = 0 %}
    {% for paper in site.data.publications.main %}
    {% unless paper.title == "IMPACTNet: Unifying Auto-bidding in End-to-End Merged Auctions" %}
    {% if selected_count < 3 %}
    {% assign selected_count = selected_count | plus: 1 %}
    <article class="selected-paper">
      <div class="selected-paper-index">0{{ selected_count }}</div>
      <div class="selected-paper-meta">
        <span class="venue-chip">{{ paper.conference_short }}</span>
        <span>{{ paper.conference | split: ',' | last | remove: '.' | strip }}</span>
      </div>
      <div class="selected-paper-main">
        <h3>{% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener">{{ paper.title }}</a>{% else %}<span>{{ paper.title }}</span>{% endif %}</h3>
        <p>{{ paper.authors }}</p>
      </div>
      {% if paper.pdf %}<a class="paper-arrow" href="{{ paper.pdf }}" target="_blank" rel="noopener" aria-label="Read {{ paper.title }}"><span>Paper</span> ↗</a>{% else %}<span class="paper-status">Forthcoming</span>{% endif %}
    </article>
    {% endif %}
    {% endunless %}
    {% endfor %}
  </div>

  <a class="section-cta" href="{{ "/publications/" | relative_url }}">View complete publication record <span aria-hidden="true">→</span></a>
</section>
