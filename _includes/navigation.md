{% for link in site.data.navigation.main %}
  <a class="normal{% if link.right %} right{% endif %}" href="{{ link.url | relative_url }}"{% if page.url == link.url %} aria-current="page"{% endif %}>{{ link.title }}</a>
{% endfor %}
