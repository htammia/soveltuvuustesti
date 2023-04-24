"""
Model for database table.
Adds database initialisation to click commands
"""
import click
from flask.cli import with_appcontext

from soveltuvuustesti import db

class UserVisit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    q1 = db.Column(db.Integer, nullable=False)
    q2 = db.Column(db.Integer, nullable=False)
    q3 = db.Column(db.Integer, nullable=False)
    q4 = db.Column(db.Integer, nullable=False)
    q5 = db.Column(db.Integer, nullable=False)
    q6 = db.Column(db.Integer, nullable=False)
    q7 = db.Column(db.Integer, nullable=False)
    q8 = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)
    taken = db.Column(db.Integer, nullable=False)

    @staticmethod
    def get_schema():
        schema = {
            "type": "object",
            "required": ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "total", "taken"]
        }
        props = schema["properties"] = {}
        props["q1"] = {
            "description": "Time the user spent on question 1",
            "type": "number"
        }
        props["q2"] = {
            "description": "Time the user spent on question 2",
            "type": "number"
        }
        props["q3"] = {
            "description": "Time the user spent on question 3",
            "type": "number"
        }
        props["q4"] = {
            "description": "Time the user spent on question 4",
            "type": "number"
        }
        props["q5"] = {
            "description": "Time the user spent on question 5",
            "type": "number"
        }
        props["q6"] = {
            "description": "Time the user spent on question 6",
            "type": "number"
        }
        props["q7"] = {
            "description": "Time the user spent on question 7",
            "type": "number"
        }
        props["q8"] = {
            "description": "Time the user spent on question 8",
            "type": "number"
        }
        props["total"] = {
            "description": "Total time spent on the quiz",
            "type": "number"
        }
        props["taken"] = {
            "description": "How many times the user has taken the test",
            "type": "number"
        }
        return schema
    
@click.command("init-db")
@with_appcontext
def init_db_command():
    click.echo("Initialising database")
    db.create_all()
    
