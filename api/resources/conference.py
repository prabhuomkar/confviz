import json
from flask_restful import Resource

conferences = []

with open('./data/ICLR/conference.json') as iclr, open('./data/CVPR/conference.json') as cvpr:
  
  iclr_conference = json.load(iclr)
  cvpr_conference = json.load(cvpr)

  conferences.append(iclr_conference)
  conferences.append(cvpr_conference)


class Conferences(Resource):
	def get(self):
		return {"conferences": conferences}

class Conference(Resource):
	def get(self, _id):
		for conference in conferences:
			if conference["id"] == _id:
				return conference
		return {"error": "Invalid conference id"}, 404

