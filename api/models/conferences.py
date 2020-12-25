import json
import os


dirname = os.path.dirname(__file__)
conferences = []

def load_conference():
	for root, dirs, files in os.walk(os.path.join(dirname, '../data/'), topdown=False):
		for name in dirs:
			conferences.append(json.load(open(os.path.join(dirname, '../data/'+name+'/conference.json'), 'r')))

load_conference()
