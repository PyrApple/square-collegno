# deployed app url

https://lbh-football.herokuapp.com/


# deploying master to heroku

git push heroku master


# deploying another branch than master to heroku

git push heroku local_branch_name:master


# force heroku rebuild

add an empty commit and push the change:

git commit --allow-empty -m "empty commit to force heroku rebuild"

# Add lame buildpack 

run:

heroku buildpacks:add --index 1 https://github.com/lepinsk/heroku-buildpack-lame

then check that lam has been installed with:

heroku run "lame"

and that you did not remove the default buildpack by running 

heroku run "node"

you can undo this command with:

heroku buildpacks:clear


# deploying on Heroku with devDependencies

(from https://devcenter.heroku.com/articles/nodejs-support)

heroku will remove package.json devDependencies before deployment, but if you set

heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false

(
reverse is:
heroku config:set NPM_CONFIG_PRODUCTION= YARN_PRODUCTION=
)

heroku config:set NODE_ENV=production

to mimic that behavior locally, run:

npm install
npm run transpile
npm prune --production
npm run start