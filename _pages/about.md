---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %} 

<!-- Hero Section -->
<section id="home" class="hero-section">
  <div class="hero-content">
    <img src="{{ '/images/szy1.png' | relative_url }}" alt="Zhiyuan Su" class="hero-avatar">
    <h1 class="hero-name">Zhiyuan (Julian) Su</h1>
    <p class="hero-title">Senior Undergraduate</p>
    <p class="hero-school">Gaoling School of Artificial Intelligence</p>
    <p class="hero-university">Renmin University of China</p>
    <div class="hero-links">
      <a href="mailto:{{ site.author.email }}"><i class="fas fa-envelope"></i> Email</a>
      <a href="{{ site.author.googlescholar }}" target="_blank"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
      <a href="https://github.com/{{ site.author.github }}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      <a href="{{ site.author.orcid }}" target="_blank"><i class="ai ai-orcid"></i> ORCID</a>
      <a href="#" class="rednote-link" data-image="{{ '/images/rednote.jpg' | relative_url }}"><i class="fas fa-book"></i> REDnote</a>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="section">
  <h2 class="section-title"><i class="fas fa-user"></i> About Me</h2>
  <div class="card-grid">
    <div class="card">
      <div class="card-header">
        <div class="card-icon"><i class="fas fa-user"></i></div>
        <div>
          <h3 class="card-title">Introduction</h3>
        </div>
      </div>
      <div class="card-content">
        <p>Hi there, I am Zhiyuan Su (Chinese name: 苏智渊), you can call me "Julian". I am currently a <strong>senior</strong> undergraduate at <a href="http://ai.ruc.edu.cn/" target="_blank">Gaoling School of Artificial Intelligence</a>, <a href="https://www.ruc.edu.cn/" target="_blank">Renmin University of China</a>.</p>
        <p>I was an exchange student at <a href="https://www.ucdavis.edu/" target="_blank">University of California, Davis</a> (2025.01 -- 2025.03) and a visiting research student at <a href="https://www.dal.ca/" target="_blank">Dalhousie University</a> (2025.07 -- 2025.10), sponsored by <a href="https://www.mitacs.ca/" target="_blank">Mitacs, Canada</a>.</p>
</div>
</div>

    <div class="card">
      <div class="card-header">
        <div class="card-icon"><i class="fas fa-flask"></i></div>
        <div>
          <h3 class="card-title">Research Interests</h3>
        </div>
      </div>
      <div class="card-content">
        <p>My research interests focus on <strong>reinforcement learning, online learning, continual learning, recommender system, and computational advertising</strong>. In addition, I am also interested in board application of AI models. <strong>Recently, I am focusing on:</strong> (1) Sequential bidding ranking algorithms, (2) Controllable model editing in generative recommendation.</p>
        <p>My research aims to build <strong>intelligent systems that are elegant in theory and effective in practice</strong>, and provide credible solutions to the urgent needs of contemporary society.</p>
      </div>
    </div>
  </div>
</section>

<!-- News Section -->
<section id="news" class="section">
  <h2 class="section-title"><i class="fas fa-newspaper"></i> News</h2>
  <div class="card">
    <div class="card-content">
      <div class="news-item">
        <div class="news-date">Jul 08, 2025</div>
        <div class="news-content">Selected to receive a SIGKDD-supported KDD 2025 Student Travel Award!</div>
      </div>
      <div class="news-item">
        <div class="news-date">Jun 30, 2025</div>
        <div class="news-content">Received the presidential scholarship of <strong>40,000 CNY</strong> for being an outstanding exchange student at UC Davis.</div>
      </div>
      <div class="news-item">
        <div class="news-date">May 15, 2025</div>
        <div class="news-content">A paper about clustering of neural bandits was accepted by <strong>KDD 2025 Research Track</strong>. Congratulations to myself on my <strong>first first-author paper</strong>!</div>
      </div>
      <div class="news-item">
        <div class="news-date">Mar 25, 2025</div>
        <div class="news-content">Completed Global Study Program at UC Davis and achieved <strong>Academic Perfection</strong>.</div>
      </div>
      <div class="news-item">
        <div class="news-date">Feb 03, 2025</div>
        <div class="news-content">A paper about integrating ad auctions and recommendations was accepted by <strong>WWW 2025</strong>. Congratulations to myself!</div>
      </div>
      <div class="news-item">
        <div class="news-date">Dec 10, 2024</div>
        <div class="news-content">Admitted to the Mitacs Globalink Research Internship <strong>full-scholarship</strong> summer research program.</div>
      </div>
    </div>
  </div>
</section>

<!-- Publications Section -->
<section id="publications" class="section">
  <h2 class="section-title"><i class="fas fa-file-alt"></i> Publications</h2>
  <div class="paper-list">

    <div class="paper-item">
      <div class="paper-image-container">
        <img src="{{ '/images/IMPACTNet.png' | relative_url }}" alt="IMPACTNet Paper">
      </div>
      <div class="paper-content">
        <h3 class="paper-title">
          <a href="#" target="_blank">IMPACTNet: Unifying Auto-bidding in End-to-End Merged Auctions</a>
        </h3>
        <p class="paper-authors">
          Yuhan Wang, Yuchao Ma, Liang Zhang, Ziyuan Wang, <strong>Zhiyuan Su</strong>, Qi Qi, Yafei Wang, Xu Li, Yuyao Liu, Pengjie Wang, Jian Xu, Bo Zheng
        </p>
        <div class="paper-meta">
          <span class="paper-tag conference">KDD 2026</span>
          <span class="paper-tag">Automated Mechanism Design</span>
          <span class="paper-tag">Auto-Bidding</span>
        </div>
      </div>
    </div>

    <div class="paper-item">
      <div class="paper-image-container">
        <img src="{{ '/images/SeRe.png' | relative_url }}" alt="SeRe Paper">
      </div>
      <div class="paper-content">
        <h3 class="paper-title">
          <a href="https://dl.acm.org/doi/pdf/10.1145/3711896.3737105" target="_blank">Revisiting Clustering of Neural Bandits: Selective Reinitialization for Mitigating Loss of Plasticity</a>
        </h3>
        <p class="paper-authors"><strong>Zhiyuan Su</strong>, Sunhao Dai, Xiao Zhang</p>
        <div class="paper-meta">
          <span class="paper-tag conference">KDD 2025</span>
          <span class="paper-tag">Neural Bandits</span>
          <span class="paper-tag">Continual Learning</span>
        </div>
      </div>
    </div>

    <div class="paper-item">
      <div class="paper-image-container">
        <img src="{{ '/images/TICNet.png' | relative_url }}" alt="TICNet Paper">
      </div>
      <div class="paper-content">
        <h3 class="paper-title">
          <a href="https://dl.acm.org/doi/pdf/10.1145/3696410.3714779?casa_token=8lqAC8Liak8AAAAA:lbsi8gr5tQAQds4gSyTdM3a7Rl43lK1yXwjDzjOtcXOxydg_JQJfvJxQtUKGAPxbZNspu3OlGT5ZcQ" target="_blank">A Context-Aware Framework for Integrating Ad Auctions and Recommendations</a>
        </h3>
        <p class="paper-authors">Yuchao Ma, Weian Li, Yuejia Dou, <strong>Zhiyuan Su</strong>, Changyuan Yu, Qi Qi</p>
        <div class="paper-meta">
          <span class="paper-tag conference">WWW 2025</span>
          <span class="paper-tag">Ad Auctions</span>
          <span class="paper-tag">Recommendations</span>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- Honors and Awards Section -->
<section id="honors" class="section">
  <h2 class="section-title"><i class="fas fa-trophy"></i> Honors and Awards</h2>
  <div class="card">
    <div class="card-content">
      <div class="news-item">
        <div class="news-date">Jul 2025</div>
        <div class="news-content">SIGKDD-supported KDD 2025 Student Travel Award <span class="highlight-red">[1,000 USD]</span></div>
      </div>
      <div class="news-item">
        <div class="news-date">Jun 2025</div>
        <div class="news-content">Presidential Scholarship for Outstanding International Exchange <span class="highlight-red">[40,000 CNY]</span></div>
      </div>
      <div class="news-item">
        <div class="news-date">Apr 2025</div>
        <div class="news-content">Municipal Approval for Student Innovation Project <span class="highlight-red">[7,500 CNY]</span></div>
      </div>
      <div class="news-item">
        <div class="news-date">Jan 2025</div>
        <div class="news-content">Mitacs Globalink Internship Scholarship <span class="highlight-red">[6,000 CAD]</span></div>
      </div>
      <div class="news-item">
        <div class="news-date">Dec 2024</div>
        <div class="news-content"><span class="highlight-red">[National Second Prize]</span> 19th "Challenge Cup" National Undergraduate Curricular Academic Science and Technology Works</div>
      </div>
      <div class="news-item">
        <div class="news-date">Oct 2024</div>
        <div class="news-content"><span class="highlight-red">[Second Prize]</span> Beijing Mathematical Contest in Modeling</div>
      </div>
      <div class="news-item">
        <div class="news-date">Oct 2024</div>
        <div class="news-content">Second-class Academic Scholarship <span class="highlight-red">[3,000 CNY]</span></div>
      </div>
      <div class="news-item">
        <div class="news-date">Apr 2024</div>
        <div class="news-content">Municipal Approval for Student Innovation Project <span class="highlight-red">[7,500 CNY]</span></div>
      </div>
    </div>
  </div>
</section>

<!-- Education Section -->
<section id="education" class="section">
  <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Education</h2>
  <div class="list-section">
    <div class="list-item">
      <div class="list-item-logo">
        <img src="{{ '/images/ucdavis_logo.png' | relative_url }}" alt="UC Davis">
      </div>
      <div class="list-item-content">
        <div class="list-item-date">Jan 2025 – Mar 2025</div>
        <div class="list-item-title">Global Study Program, University of California, Davis</div>
        <div class="list-item-desc">Major: Mathematics & Statistics<br>Graduated with Academic Perfection</div>
      </div>
    </div>
    <div class="list-item">
      <div class="list-item-logo">
        <img src="{{ '/images/ruc_logo.png' | relative_url }}" alt="RUC">
      </div>
      <div class="list-item-content">
        <div class="list-item-date">Sep 2022 – Present</div>
        <div class="list-item-title">Gaoling School of Artificial Intelligence, Renmin University of China</div>
        <div class="list-item-desc">Bachelor of Engineering in Artificial Intelligence<br>Supervisors: <a href="https://gsai.ruc.edu.cn/qiqi" target="_blank">Dr. Qi Qi</a>, <a href="https://pinkfloyd1989.github.io/Xiao_Zhang/" target="_blank">Dr. Xiao Zhang</a></div>
      </div>
    </div>
  </div>
</section>

<!-- Work Experience Section -->
<section id="experience" class="section">
  <h2 class="section-title"><i class="fas fa-briefcase"></i> Work Experiences</h2>
  <div class="list-section">
    <div class="list-item">
      <div class="list-item-logo">
        <img src="{{ '/images/dal_logo.png' | relative_url }}" alt="Dalhousie">
      </div>
      <div class="list-item-content">
        <div class="list-item-date">Jul 2025 – Oct 2025 | Mitacs Research Intern </div>
        <div class="list-item-title">Faculty of Computer Science, Dalhousie University</div>
        <div class="list-item-desc">
          Visiting student at <a href="https://web.cs.dal.ca/~gaw/" target="_blank">Dalhousie Applied Machine Learning Research Lab (DAMLR)</a><br>
          Supervisor: <a href="https://wuga214.github.io/" target="_blank">Dr. Ga Wu</a>
        </div>
      </div>
    </div>
    <div class="list-item">
      <div class="list-item-logo">
        <img src="{{ '/images/baidu_color.png' | relative_url }}" alt="Baidu">
      </div>
      <div class="list-item-content">
        <div class="list-item-date">May 2024 – Sep 2024</div>
        <div class="list-item-title">Summer Intern, Baidu Inc.</div>
        <div class="list-item-desc">Pinecone Talent Elite Project</div>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="services" class="section">
  <h2 class="section-title"><i class="fas fa-handshake"></i> Services</h2>
  <div class="card-grid">
    <div class="card">
      <div class="card-header">
        <div class="card-icon"><i class="fas fa-gavel"></i></div>
        <div>
          <h3 class="card-title">Reviewer</h3>
        </div>
      </div>
      <div class="card-content">
        <p>Artifact badging reviewer, <strong>KDD 2025</strong></p>
      </div>
    </div>
  </div>
</section>

<!-- Beyond Academics Section -->
<section id="interests" class="section">
  <h2 class="section-title"><i class="fas fa-palette"></i> Beyond Academics</h2>
  <div class="card-grid">
    <div class="card">
      <div class="card-header">
        <div class="card-icon"><i class="fas fa-music"></i></div>
        <div>
          <h3 class="card-title">Music & Arts</h3>
        </div>
      </div>
      <div class="card-content">
        <p>I love <strong>music, literature, travel and badminton</strong>. I am a <strong>campus singer</strong> at Renmin University of China and have been invited to participate in various concerts and music festivals at RUC.</p>
        <p>I am also a <strong>musician at NetEase Cloud Music</strong>, and my stage name is <a href="http://music.163.com/#/artist?id=36180214" target="_blank" style="color: var(--ruc-red);">Ayinor</a>.</p>
      </div>
    </div>
</div>
</section>
