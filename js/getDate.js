function formatDate(num) {
	if (num > 9) {
		return num;
	} else {
		return '0' + num;
	}
}

function showdate(n) {
	var data = new Date(new Date() - 0 + n * 86400000);
	data = data.getFullYear() + "-" + formatDate((data.getMonth() + 1)) + "-" + formatDate(data.getDate());
	return data;
}