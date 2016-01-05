### bendystraw example

<img src="http://i.imgur.com/Pdmetdq.png" alt="bendystraw" align="right" />

an example of what an Angular app could look like using bendystraw.

for more information, [read the bendystraw docs](https://github.com/brousalis/bendystraw/)

to setup the app:

    npm install
    bower install

to run the app:

    gulp

to do some more things set these environment variables:

```
export SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
export AWS_BUCKET=
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_DISTRIBUTION_ID=
export AWS_CLOUDFRONT_DOMAIN=xxxxx.cloudfront.net
export GITHUB_TOKEN=
```

then you can:

    gulp build
    gulp release
    gulp deploy

if you want, you can run the commands in staging mode, and the `.env.staging` will get loaded instead of `.env`:

    gulp --env staging

and to deploy, set your environment variables for staging:

```
export STAGING_AWS_BUCKET=
export STAGING_AWS_ACCESS_KEY_ID=
export STAGING_AWS_SECRET_ACCESS_KEY=
export STAGING_AWS_DISTRIBUTION_ID=
export STAGING_AWS_CLOUDFRONT_DOMAIN=xxxxx.cloudfront.net
```

and
    gulp build --env staging
    gulp deploy --env staging

> I agree this is kind of awkward, but it is done like so to support CircleCI based deployments, which has a less than ideal solution to env variables. I'd like to rethink how to handle app configuration and multiple environments

## CircleCI deployments and `.env`

When you use a `.env` for app configuration, you need to do some extra work to be able to build the app on CircleCI's servers for testing.

If you look at the `gulpfile.js`, you'll see a `gulp ci` task which is then used in the `circle.yml` file. It will create a `.env` file locally so CircleCi can build the app, then run the test suite.

In order to get `gulp release` to work on CircleCI, you must add a GitHub User Key in the Checkout SSH Keys page on CircleCi.
