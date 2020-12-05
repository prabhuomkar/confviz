# conference-viz Api

## Requirements

1. Download and install [Python 3.8+](https://www.python.org/downloads/)

2. Create a virtual environment and install dependencies :
```
python3 -m venv conference-viz-api
source conference-viz-api/bin/activate
pip install -r requirements.txt
```
## Running

`python app.py`

## Endpoint

### Acceptance Rate

Acceptance rate of list of all conferences
```
http://127.0.0.1:5000/conferences/acceptance-rates
```

Acceptance rate of conference by id
```
http://127.0.0.1:5000/conference/<id>/acceptance-rate
```

### Conference

Get the details of all conferences
```
http://127.0.0.1:5000/conferences
``` 

Get the details of conference by id
```
http://127.0.0.1:5000/conference/<id>
```

### Keywords

Get keywords of all conferences
```
http://127.0.0.1:5000/conferences/keywords
```

Get keywords of conference by id
```
http://127.0.0.1:5000/conference/<id>/keywords
```






