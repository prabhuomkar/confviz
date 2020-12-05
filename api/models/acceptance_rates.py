import json

acceptance_rates = []

def load_acceptance_rate():
	iclr_data = open('.././data/ICLR/acceptance_rate.json','r')
	cvpr_data = open('.././data/CVPR/acceptance_rate.json', 'r')
	acl_data = open('.././data/ACL/acceptance_rate.json','r')

	iclr = json.load(iclr_data)
	cvpr = json.load(cvpr_data)
	acl = json.load(acl_data)

	acceptance_rates.append(iclr)
	acceptance_rates.append(cvpr)
	acceptance_rates.append(acl)

load_acceptance_rate()
