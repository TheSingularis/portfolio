---
layout: default
title: Home
---

<div class="container py-5">
  <div class="row mb-4">
    <div class="col-md-8 mx-auto text-center">
      <h1>Jordan</h1>
      <p class="lead">Game Developer specializing in Unreal Engine &amp; C++</p>
    </div>
  </div>
  <h2 class="mb-4">Latest Projects</h2>
  <div class="row" id="latest-projects">
    {% assign sorted = site.projects | sort: 'date' | reverse %}
    {% for project in sorted limit:3 %}
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
