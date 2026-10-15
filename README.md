# torluca.github.io

Luca Tortorelli's bilingual personal website for research, scientific software,
survey collaborations, science communication, and the popular-science book
*Galassie*.

The site is static and hosted with GitHub Pages. It uses semantic HTML, shared
CSS, and minimal vanilla JavaScript; there is no build step.

## Main files

- `index.html` — English homepage
- `index_it.html` — Italian homepage
- `galassie.html` — Italian page for *Galassie*
- `assets/css/main.css` — shared styles
- `sitemap.xml` and `robots.txt` — search-engine discovery

## Local preview

From the repository root, run:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/`. Changes pushed to `main` are published by
GitHub Pages.
