install:
        npm ci

brain-games:
        node bin/brain-games.js

publish:
        npx publish --dry-run

lint:
        npx eslint

