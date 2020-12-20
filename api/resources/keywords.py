import json
from flask_restful import Resource
from api.models.keywords import keywords_list

class AllKeywords(Resource):
	def get(self):
		return {"keywords": keywords_list}

class Keywords(Resource):
	def get(self, _id):
		for keywords in keywords_list:
			if keywords["id"] == _id:
				return keywords
		return {"error": "Invalid conference id"}, 404
