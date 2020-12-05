import json

conferences = []

with open('../data/ICLR/conference.json') as iclr, open('../data/CVPR/conference.json') as cvpr:
  iclr_data = json.load(iclr)
  cvpr_data = json.load(cvpr)

  conferences.append(iclr_data)
  conferences.append(cvpr_data)

print(conferences)


