function dateToLetter(value) {
	var month, day;
	value.substring(5, 6) === '0' ? month = value.substring(6, 7) : month = value.substring(5, 7);
	value.substring(8, 9) === '0' ? day = value.substring(9, 10) : day = value.substring(8, 10);
	value = value.substring(0, 4) + '年' + month + '月' + day + '日';

	return value;
};

function dateToNumber(value) {
	var month, day;
	value.substring(6, 7) === '月' ? month = '0' + value.substring(5, 6) : month = value.substring(5, 7);
	value.substring(6, 7) === '月' ? value.substring(8, 9) === '日' ? day = '0' + value.substring(7, 8) : day = value.substring(7, 9)
	:
	value.substring(9, 10) === '日' ? day = '0' + value.substring(8, 9) : day = value.substring(8, 10);
	value = value.substring(0, 4) + '-' + month + '-' + day;

	return value;
};