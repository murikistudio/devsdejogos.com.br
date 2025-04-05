---
layout: default
title: Sobre
permalink: about
content_thin: true
---

# {{ page.title }}

A iniciativa **Desenvolvedores de Jogos** é o ponto de encontro para quem cria jogos no Brasil!

Aqui, você encontra uma lista com projetos independentes nacionais, feita pra dar visibilidade aos devs e inspirar a comunidade.
Além disso, você pode participar do nosso grupo no WhatsApp, onde desenvolvedores trocam ideias, tiram dúvidas, pedem feedback e fazem contatos.

Se você faz ou gosta de jogos indie, esse é o seu lugar.

- 📌 Compartilhe seu projeto.
- 💬 Converse com outros devs.
- 🚀 Cresça junto com a comunidade.

Participe do nosso grupo e tenha seu jogo listado aqui, entre em contato com a gente!

{% for contact in site.data.contact -%}
- [{{ contact.name }}]({{ contact.url }})
{% endfor %}
