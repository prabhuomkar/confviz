import json
from flask_restful import Resource

acceptance_rates = []

with open ('./data/ICLR/acceptance_rate.json') as iclr, open('./data/CVPR/acceptance_rate.json') as cvpr:
	
	iclr_acceptance_rate = json.load(iclr)
	cvpr_acceptance_rate = json.load(cvpr)

	acceptance_rates.append(iclr_acceptance_rate)
	acceptance_rates.append(cvpr_acceptance_rate)


class AcceptanceRates(Resource):
	def get(self):
		return {"acceptance_rates": acceptance_rates}

class AcceptanceRate(Resource):
	def get(self, _id):
		for acceptance_rate in acceptance_rates:
			if acceptance_rate["id"] == _id:
				return acceptance_rate
		return {"error": "Invalid conference id"}, 404