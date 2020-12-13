import json

papers_list = []

def load_papers():
	aaai_data = open('./data/AAAI/papers.json', 'r')
	acl_data = open('./data/ACL/papers.json','r')
	cvpr_data = open('./data/CVPR/papers.json', 'r')
	iclr_data = open('./data/ICLR/papers.json','r')

	aaai = json.load(aaai_data)
	acl = json.load(acl_data)
	cvpr = json.load(cvpr_data)
	iclr = json.load(iclr_data)

	papers_list.append(aaai)
	papers_list.append(acl)
	papers_list.append(cvpr)
	papers_list.append(iclr)
	
load_papers()
