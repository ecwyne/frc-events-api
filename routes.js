var Handlebars = require('handlebars');

Handlebars.registerHelper('params', function (){
	var arr = Array.prototype.slice.call(arguments, 0, Array.prototype.slice.call(arguments).length - 1);
	var out = '';
	for (var i = 0; i < arr.length; i++){
		if (this[arr[i]]){
			out += (out == '' ? '?' : '&') + arr[i] + '=' + this[arr[i]]; 
		}
	}
	return new Handlebars.SafeString(out);
});

module.exports = {
	alliances: Handlebars.compile('/alliances/{{season}}/{{eventCode}}'),
	awards: Handlebars.compile('/awards/{{season}}{{params "eventCode" "teamNumber"}}'),
	awardsList: Handlebars.compile('/awards/{{season}}/list'),
	matches: Handlebars.compile('/matches/{{season}}/{{eventCode}}{{params "tournamentLevel" "teamNumber" "matchNumber" "start" "end"}}'),
	rankings: Handlebars.compile('/rankings/{{season}}/{{eventCode}}{{params "teamNumber" "top"}}'),
	schedule: Handlebars.compile('/schedule/{{season}}/{{eventCode}}{{params "tournamentLevel" "teamNumber" "start" "end"}}'),
	hybridSchedule: Handlebars.compile('/schedule/{{season}}/{{eventCode}}/{{tournamentLevel}}/hybrid{{params "start" "end"}}'),
	season: Handlebars.compile('/{{season}}'),
	events: Handlebars.compile('/events/{{season}}{{params "eventCode" "teamNumber" "districtCode" "excludeDistrict"}}'),
	districts: Handlebars.compile('/districts/{{season}}'),
	teams: Handlebars.compile('/teams/{{season}}{{params "teamNumber" "eventCode" "districtCode" "page"}}')
}