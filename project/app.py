from flask import Flask, render_template_string, Markup
from flask_flatpages import FlatPages
from flask_frozen import Freezer
from flask_flatpages.utils import pygmented_markdown
import markdown2


def my_renderer(text):
    rendered_body = render_template_string(Markup(text))
    pygmened_body = markdown2.markdown(rendered_body, extras=['codehilite','fenced-code-blocks'])
    return pygmened_body

app = Flask(__name__)
app.config.from_pyfile('settings.py')
app.config['FLATPAGES_HTML_RENDERER'] = my_renderer

pages = FlatPages(app)
freezer = Freezer(app)
