from flask import render_template, Markup
from .app import app, pages
from flask_flatpages import pygments_style_defs

@app.route('/')
def home():
    posts = [page for page in pages if 'date' in page.meta]
    # sort pages by date
    sorted_posts = sorted(posts, reverse=True, key=lambda page: page.meta['date'])
    # topics = ['tech','animals','nature']
    return render_template('index.html', pages=sorted_posts)


@app.route('/resume/')
def resume():
    return render_template('resume.html')

@app.route('/<path:path>/')
def page(path):
    # path is the filename of a page, without the file extension
    # e.g. "first-post"
    page = pages.get_or_404(path)
    template = page.meta.get('template', 'page.html')
    return render_template(template, page=page)

@app.route('/pygments.css')
def pygments_css():
    return pygments_style_defs('tango'), 200, {'Content-Type': 'text/css'}

