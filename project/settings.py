# -*- coding: utf-8 -*-
import os

REPO_NAME = "chapnickc.github.io"  # Used for FREEZER_BASE_URL
DEBUG = True

FLATPAGES_AUTO_RELOAD = DEBUG

# Assumes the app is located in the same directory
# where this file resides
APP_DIR = os.path.dirname(os.path.abspath(__file__))

def parent_dir(path):
    """ Return the parent of a directory."""
    return os.path.abspath(os.path.join(path, os.pardir))

PROJECT_ROOT = parent_dir(APP_DIR)

# In order to deploy to Github pages, you must build 
# the static files to the project root
FREEZER_DESTINATION = PROJECT_ROOT

# Since this is a repo page (not a Github user page),
# we need to set the BASE_URL to the correct url as per GH Pages' standards
FREEZER_BASE_URL = "http://localhost/{0}".format(REPO_NAME)


# tell python to look for .md files in ./pages
FLATPAGES_ROOT = os.path.join(APP_DIR, 'pages')
FLATPAGES_EXTENSION = '.md'
FLATPAGES_MARKDOWN_EXTENSIONS = ['codehilite','fenced_code','mdx_math']


# IMPORTANT: If this is True, all app files
# will be deleted when you run the freezer
FREEZER_REMOVE_EXTRA_FILES = False




