FIXLANG = LC_ALL=C
SETMONGO = MONGOURL="mongodb://localhost/icontest"


prepare:
	@cd app; meteor npm install

dev: prepare
	@cd app; $(FIXLANG) $(SETMONGO) meteor
