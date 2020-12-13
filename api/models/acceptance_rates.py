import json

acceptance_rates = []

def load_acceptance_rate():
	aaai_data = open('./data/AAAI/acceptance_rate.json', 'r')
	acl_data = open('./data/ACL/acceptance_rate.json','r')
	cvpr_data = open('./data/CVPR/acceptance_rate.json', 'r')
	iclr_data = open('./data/ICLR/acceptance_rate.json','r')

	aaai = json.load(aaai_data)
	acl = json.load(acl_data)
	cvpr = json.load(cvpr_data)
	iclr = json.load(iclr_data)

	acceptance_rates.append(aaai)
	acceptance_rates.append(acl)
	acceptance_rates.append(cvpr)
	acceptance_rates.append(iclr)

load_acceptance_rate()
