import json

keywords_list = []

def load_keywords():
	iclr_data = open('.././data/ICLR/keywords.json','r')
	cvpr_data = open('.././data/CVPR/keywords.json', 'r')
	acl_data = open('.././data/ACL/keywords.json','r')

	iclr = json.load(iclr_data)
	cvpr = json.load(cvpr_data)
	acl = json.load(acl_data)

	keywords_list.append(iclr)
	keywords_list.append(cvpr)
	keywords_list.append(acl)

load_keywords()
