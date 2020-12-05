import json

conferences = []

def load_conference():
	iclr_data = open('.././data/ICLR/conference.json','r')
	cvpr_data = open('.././data/CVPR/conference.json', 'r')
	acl_data = open('.././data/ACL/conference.json','r')

	iclr = json.load(iclr_data)
	cvpr = json.load(cvpr_data)
	acl = json.load(acl_data)

	conferences.append(iclr)
	conferences.append(cvpr)
	conferences.append(acl)

load_conference()
