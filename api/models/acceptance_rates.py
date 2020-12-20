import json
import os


dirname = os.path.dirname(__file__)
acceptance_rates = []

def load_acceptance_rate():
	for root, dirs, files in os.walk(os.path.join(dirname, '../data/'), topdown=False):
		for name in dirs:
			acceptance_rates.append(json.load(open(os.path.join(dirname, '../data/'+name+'/acceptance_rate.json'), 'r')))

load_acceptance_rate()
