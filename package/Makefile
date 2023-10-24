
default: build

build: css js

js:
	npm run build

css:
	sass scss\redpapr.scss:css\redpapr.css

watchcss:
	sass --watch scss\redpapr.scss:css\redpapr.css

clean:
	@rm -r dist css
