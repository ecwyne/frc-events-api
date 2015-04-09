# FRC-Events-API
Node.js wrapper for FRC Events API [API Docs](http://docs.frcevents.apiary.io)
## Installation
`npm install frc-events-api`

##Usage
```javascript
var FRCAPI = require('frc-events-api');

var api = new FRCAPI({username: 'YOUR_USERNAME', auth: 'YOUR_AUTH_KEY', season: '2015'}); //season is optional
//api.METHODNAME(options, callback)
api.events({teamNumber: 1678}, function (err, data){
	if (!err){
		console.log(data);
	}
})
```

#Methods
| Method             | Required Parameters        | Optional Parameters                                  |
|--------------------|----------------------------|------------------------------------------------------|
| api.alliances      | eventCode                  |                                                      |
| api.awards         |                            | eventCode, teamNumber                                |
| api.awardsList     |                            |                                                      |
| api.matches        | eventCode                  | tournamentLevel, teamNumber, matchNumber, start, end |
| api.rankings       | eventCode                  | teamNumber, top                                      |
| api.schedule       | eventCode                  | tournamentLevel, teamNumber, start, end              |
| api.hybridSchedule | eventCode, tournamentLevel | start, end                                           |
| api.season         |                            |                                                      |
| api.events         |                            | eventCode, teamNumber, districtCode, excludeDistrict |
| api.districts      |                            |                                                      |
| api.teams          |                            | teamNumber, eventCode, districtCode, page            |