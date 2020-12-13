import json

keywords_list = []

def load_keywords():
	aaai_data = open('./data/AAAI/keywords.json', 'r')
	acl_data = open('./data/ACL/keywords.json','r')
	cvpr_data = open('./data/CVPR/keywords.json', 'r')
	iclr_data = open('./data/ICLR/keywords.json','r')

	aaai = json.load(aaai_data)
	acl = json.load(acl_data)
	cvpr = json.load(cvpr_data)
	iclr = json.load(iclr_data)

	keywords_list.append(aaai)
	keywords_list.append(acl)
	keywords_list.append(cvpr)
	keywords_list.append(iclr)
	
load_keywords()
