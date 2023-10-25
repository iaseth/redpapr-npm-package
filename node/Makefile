
default: build

build: css js

js:
	npm run build

css:
	sass scss\redpapr.scss:css\redpapr.css --no-source-map

watchcss:
	sass --watch scss\redpapr.scss:css\redpapr.css --no-source-map

clean:
	@rm -r dist css
