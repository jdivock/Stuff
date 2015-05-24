var koa = require('koa');
var app = koa();
var parse = require('co-body');
var fs = require('fs');

app.use(function*(next) {
    if (this.path !== '/json') return yield next;

    this.body = {
      foo: 'bar'
    };
});

app.use(function*(next) {
    if (this.path !== '/stream') return yield next;

    this.body = fs.createReadStream(process.argv[3]);
});

app.listen(process.argv[2]);
