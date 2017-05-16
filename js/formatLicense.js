function formatLicense(license) {
	license = license.split('');

	license.splice(2, 0, '-');

	return license.join('');
}