import json
from flask_restful import Resource
from models.acceptance_rates import acceptance_rates

class AcceptanceRates(Resource):
	def get(self):
		return {"acceptance_rates": acceptance_rates}

class AcceptanceRate(Resource):
	def get(self, _id):
		for acceptance_rate in acceptance_rates:
			if acceptance_rate["id"] == _id:
				return acceptance_rate
		return {"error": "Invalid conference id"}, 404