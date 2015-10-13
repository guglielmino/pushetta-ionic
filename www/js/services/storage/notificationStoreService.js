'use strict'

angular.module('pushetta.services.storage', [])
	.factory('NotificationStorageSvc', ['$q',
		'$cordovaSQLite',
		function($q, $cordovaSQLite) {

			var db = null;

			var NotificationStorageSvc = function() {
				db = $cordovaSQLite.openDB("pushetta.db");

				$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS pushMessages (id integer primary key," +
					"body text not null,channel_name text not null, channel_icon_image text not null," +
					"date_created datetime null, expire datetime null, is_sync_read integer not null default 0, " +
					"preview_url text null, deleted integer not null default 0)");

			};

			NotificationStorageSvc.prototype.getMyNotifications = function(deviceId) {
				var defer = $q.defer();

				var query = "SELECT id, body, channel_name, channel_icon_image, date_created, expire, is_sync_read, preview_url, deleted" +
					" FROM pushMessages";
				$cordovaSQLite.execute(db, query, [])
					.then(function(res) {
						defer.resolve(res.rows);
					}, function(err) {
						defer.resolve(err);
					});

				return defer.promise;
			};

			return NotificationStorageSvc;
		}
	])
	.service('notificationStorageSvc', ['NotificationStorageSvc', function(NotificationStorageSvc) {
		return new NotificationStorageSvc();
	}]);