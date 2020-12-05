import json
from flask_restful import Resource
from models.conferences import conferences

class Conferences(Resource):
	def get(self):
		return {"conferences": conferences}

class Conference(Resource):
	def get(self, _id):
		for conference in conferences:
			if conference["id"] == _id:
				return conference
		return {"error": "Invalid conference id"}, 404



