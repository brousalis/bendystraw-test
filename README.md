### bendystraw example

<img src="http://i.imgur.com/Pdmetdq.png" alt="bendystraw" align="right" />

an example of what an Angular app could look like using bendystraw.

for more information, [read the bendystraw docs](https://github.com/brousalis/bendystraw/)

to setup the app:

    npm install
    bower install

to run the app:

    gulp server

to do some more things set these environment variables:

```
export AWS_BUCKET=
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=

export AWS_DISTRIBUTION_ID=
export AWS_CLOUDFRONT_DOMAIN=xxxxx.cloudfront.net
export SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
export GITHUB_TOKEN=
```

then you can:

    gulp build
    gulp release
    gulp deploy
