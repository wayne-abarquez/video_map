from . import home
from flask import render_template
from flask_login import login_required
import logging

log = logging.getLogger(__name__)


@home.route('/', methods=['GET', 'POST'])
@home.route('/index', methods=['GET', 'POST'])
@login_required
def index():
    return render_template('/index.html')
