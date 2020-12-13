import json
from flask_restful import Resource
from models.papers import papers_list

class AllPapers(Resource):
	def get(self):
		return {"papers": papers_list}

class Papers(Resource):
	def get(self, _id):
		for papers in papers_list:
			if papers["id"] == _id:
				return papers
		return {"error": "Invalid conference id"}, 404
