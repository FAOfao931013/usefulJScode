function hideName(name) {
	switch (name.length) {
		case 2:
			return "*" + name.substr(-1);
			break;
		case 3:
			return "*" + name.substr(-2);
			break;
		case 4:
			return "**" + name.substr(-2);
			break;
		default:
			return name;
	}
}