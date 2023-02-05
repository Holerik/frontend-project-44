install:
        npm ci

brain-games:
        node bin/brain-games.js

brain-even:
        node bin/brain-even.js

publish:
        npx publish --dry-run

lint:
        npx eslint

