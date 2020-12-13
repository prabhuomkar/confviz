import json

conferences = []

def load_conference():
	aaai_data = open('./data/AAAI/conference.json', 'r')
	acl_data = open('./data/ACL/conference.json','r')
	cvpr_data = open('./data/CVPR/conference.json', 'r')
	iclr_data = open('./data/ICLR/conference.json','r')

	aaai = json.load(aaai_data)
	acl = json.load(acl_data)
	cvpr = json.load(cvpr_data)
	iclr = json.load(iclr_data)

	conferences.append(aaai)
	conferences.append(acl)
	conferences.append(cvpr)
	conferences.append(iclr)

load_conference()
