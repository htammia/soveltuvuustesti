from flask import Blueprint, request
from jsonschema import validate, ValidationError
from sqlalchemy.exc import IntegrityError
from flask_cors import CORS

from soveltuvuustesti.db import db
from soveltuvuustesti.models import UserVisit

bp = Blueprint("visit", __name__, url_prefix="/visit")
CORS(bp)

@bp.route("/save", methods=["POST"])
def save():
    if request.method == "POST":
        if not request.is_json:
            return {"[ERROR]": "please use JSON"}, 415
        
        #try to validate request
        try:
            print(request.json)
            validate(request.json, UserVisit.get_schema())
        except ValidationError as e:
            print(e)
            return {"[ERROR]": "Invalid JSON"}, 400
        except:
            print(e)
            return {"[ERROR]": "Your request could not be processed"}, 400
        
        #create new visit
        visit = UserVisit(
            q1=request.json["q1"],
            q2=request.json["q2"],
            q3=request.json["q3"],
            q4=request.json["q4"],
            q5=request.json["q5"],
            q6=request.json["q6"],
            q7=request.json["q7"],
            q8=request.json["q8"],
            total=request.json["total"],
            taken=request.json["taken"]
        )

        #trying to add to the database
        try: 
            db.session.add(visit)
            db.session.commit()
        except IntegrityError:
            return {"[ERROR]": "Could not add to database"}, 500
        
        return {"[OK]": "Visit added"}, 201