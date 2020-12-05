import json
from flask import Flask
from flask_restful import Api
from resources.conference import Conference, Conferences
from resources.acceptance_rate import AcceptanceRate, AcceptanceRates
from resources.keywords import AllKeywords, Keywords

app = Flask(__name__)
api = Api(app)

# conference details
api.add_resource(Conferences, '/conferences')
api.add_resource(Conference, '/conference/<string:_id>')

# acceptance rate of each conference
api.add_resource(AcceptanceRates, '/conferences/acceptance-rates')
api.add_resource(AcceptanceRate, '/conference/<string:_id>/acceptance-rate')

#keywords of conference
api.add_resource(AllKeywords, '/conferences/keywords')
api.add_resource(Keywords, '/conference/<string:_id>/keywords')

app.run(port=5000, debug=True)