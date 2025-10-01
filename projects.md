---
layout: default
title: Projects
---

<div class="container py-5">
  <h1 class="mb-4">Projects</h1>
  <div class="row">
    {% assign sorted = site.projects | sort: 'date' | reverse %}
    {% for project in sorted %}
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="{{ project.image }}" class="card-img-top" alt="{{ project.title }} screenshot">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="{{ project.itch_link }}" class="btn btn-primary" target="_blank">Play on itch.io</a>
            {% if project.github_link %}
              <a href="{{ project.github_link }}" class="btn btn-outline-secondary ms-2" target="_blank">View Code</a>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
