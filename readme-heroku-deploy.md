# deployed app url

https://square-collegno.herokuapp.com/


# deploying master to heroku

git push heroku main


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


# avoid using lame on distant repo (no slicing, ship mp3 with slug)

git branch --delete bake-sliced-mp3
git checkout -b bake-sliced-mp3

npm run start
git add .soundworks/service_audio-stream-manager -f

git rm projects/default/assets/streams/*.wav
git add projects/default/assets/streams/*/*.mp3 -f

--- a/src/server/PlayerExperience.js
+++ b/src/server/PlayerExperience.js
@@ -25,6 +25,7 @@ class PlayerExperience extends Experience {
       compress: true,
       duration: 4,
       overlap: 0.1,
+      discardRechunkUpdatedFiles: true,
     });

git add src/server/PlayerExperience.js

git commit -m 'harcoded .mp3 to git to avoid using lame on server'