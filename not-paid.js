// Original script made by Ciprian (@kleampa), Romania
(function() {
	var site = "www.example2.com";

	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		// Try to parse returned values, exit the function silently in case of fail
		try {
			var json = JSON.parse(this.responseText);
			var due_date = new Date(json.due_date);
			var days_deadline = json.days_deadline;
			var stop = json.stop;

		} catch(err) {
			return;

		}

		// You can stop the fading away immediately by changing stop to true in the returned JSON
		if(!stop) {
			// Go through the normal procedure
			var current_date = new Date();
			var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
			var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
			var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

			if(days > 0) {
				var days_late = days_deadline-days;
				var opacity = (days_late * 100 / days_deadline) / 100;
				opacity = (opacity < 0) ? 0 : opacity;
				opacity = (opacity > 1) ? 1 : opacity;
				if(opacity >= 0 && opacity <= 1) {
					document.getElementsByTagName("BODY")[0].style.opacity = opacity;
				}
			}
		}

	}
	xhr.open("GET", "https://www.example.com/not-paid.php?site=" + site, true);
	xhr.send();

})();
