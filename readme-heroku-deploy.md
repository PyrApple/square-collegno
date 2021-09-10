# deployed app url

https://square-collegno.herokuapp.com/


# deploying master to heroku

git push heroku master


# deploying another branch than master to heroku

git push heroku local_branch_name:master


# force heroku rebuild

add an empty commit and push the change:

git commit --allow-empty -m "empty commit to force heroku rebuild"

# browse files deployed on heroku

run:

heroku login
heroku run bash -a APPNAME

and to exit:

exit


# Add lame to dyno (i.e. heroku sandbox)

- (optional?) clear workspace

heroku buildpacks:clear
heroku buildpacks:add --index 1 heroku/nodejs

- add apt buildpack:

heroku buildpacks:add --index 1 heroku-community/apt

- check buildpacks:

heroku buildpacks

- add lame to deps file

touch Aptfile
echo "lame" > Aptfile

- push to repo


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