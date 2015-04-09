var request = require('request');
var _ = require('underscore');
var routes = require('./routes.js');

var API = function (options){
	var self = this;
	var baseURL = 'https://' + options.username + ':' + options.auth + '@frc-api.usfirst.org/api/' + (options.version || 'v1.0');
	var defaults = {
		season: options.season || 2015
	}
	this.get = function (path, cb){
		request({
			url: baseURL + path
		}, cb)
	}

	for (i in routes){
		this[i] = function (obj, cb){
			self.get(routes[i](_.extend(defaults, obj)), function (err, res, body){
				try {
					cb(err, JSON.parse(body))
				} catch (e){
					cb(err, body)
				}
				
			});
		}
	}
}

module.exports = API;