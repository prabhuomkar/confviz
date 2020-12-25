import json
import os


dirname = os.path.dirname(__file__)
keywords_list = []

def load_keywords():
	for root, dirs, files in os.walk(os.path.join(dirname, '../data/'), topdown=False):
		for name in dirs:
			keywords_list.append(json.load(open(os.path.join(dirname, '../data/'+name+'/keywords.json'), 'r')))

load_keywords()
