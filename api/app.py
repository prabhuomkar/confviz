import json
from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from resources.conference import Conference, Conferences
from resources.acceptance_rate import AcceptanceRate, AcceptanceRates
from resources.keywords import AllKeywords, Keywords
from resources.papers import AllPapers, Papers

app = Flask(__name__)
api = Api(app)
CORS(app)

# conference details
api.add_resource(Conferences, '/conferences')
api.add_resource(Conference, '/conference/<string:_id>')

# acceptance rate of each conference
api.add_resource(AcceptanceRates, '/conferences/acceptance-rates')
api.add_resource(AcceptanceRate, '/conference/<string:_id>/acceptance-rate')

# keywords of conference
api.add_resource(AllKeywords, '/conferences/keywords')
api.add_resource(Keywords, '/conference/<string:_id>/keywords')

# papers of conference
api.add_resource(AllPapers, '/conferences/papers')
api.add_resource(Papers, '/conference/<string:_id>/papers')

if __name__ == "__main__":
	app.run(port=5000, debug=True)