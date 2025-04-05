---
layout: default
title: Sobre
permalink: about
content_thin: true
---

# {{ page.title }}

{{ site.description }}

<p>Aqui, você encontra uma lista com projetos independentes nacionais, feita pra dar visibilidade aos devs e inspirar a comunidade.
Além disso, você pode participar do nosso grupo no WhatsApp, onde desenvolvedores trocam ideias, tiram dúvidas, pedem feedback e fazem contatos.
Esse é o seu lugar se você desenvolve ou gosta de jogos indie!</p>

<ul>
    <li>📌 Compartilhe seu projeto.</li>
    <li>💬 Converse com outros devs.</li>
    <li>🚀 Cresça junto com a comunidade.</li>
</ul>

<p>Participe do nosso grupo e tenha seu jogo listado aqui, entre em contato com a gente!</p>

{% for contact in site.data.contact -%}
- [{{ contact.name }}]({{ contact.url }})
{% endfor %}
