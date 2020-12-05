import json
from flask_restful import Resource

keywords_lst = []

with open('./data/ICLR/keywords.json') as iclr, open('./data/CVPR/keywords.json') as cvpr:

  iclr_keywords = json.load(iclr)
  cvpr_keywords = json.load(cvpr)

  keywords_lst.append(iclr_keywords)
  keywords_lst.append(cvpr_keywords)

class AllKeywords(Resource):
	def get(self):
		return {"keywords": keywords_lst}

class Keywords(Resource):
	def get(self, _id):
		for keywords in keywords_lst:
			if keywords["id"] == _id:
				return keywords
		return {"error": "Invalid conference id"}, 404
