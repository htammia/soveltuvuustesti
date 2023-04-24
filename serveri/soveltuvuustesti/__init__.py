import os

from flask import Flask

from soveltuvuustesti.db import db

# based on https://flask.palletsprojects.com/en/2.2.x/tutorial/factory/
# modified to use SQLAlchemy
def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(app.instance_path, "tietokanta.db"),
        SQLALCHEMY_TRACK_MODIFICATIONS = False
    )
    if test_config is None:
        app.config.from_pyfile("config.py", silent=True)
    else:
        app.config.from_mapping(test_config)

    #make sure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    db.init_app(app)

    from . import models
    app.cli.add_command(models.init_db_command)

    from . import visit
    app.register_blueprint(visit.bp)

    return app