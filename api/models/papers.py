import json
import os


dirname = os.path.dirname(__file__)
papers_list = []

def load_papers():
	for root, dirs, files in os.walk(os.path.join(dirname, '../data/'), topdown=False):
		for name in dirs:
			papers_list.append(json.load(open(os.path.join(dirname, '../data/'+name+'/papers.json'), 'r')))
	
load_papers()
