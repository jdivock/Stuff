var koa = require('koa');
var app = koa();

app.keys = ['secret', 'keys'];

app.use(function*() {

    var views = this.cookies.get('view', ['signed']) || 0;

    ++views;

    this.body = views + ' views';
    this.cookies.set('view', views, ['signed']);


});

app.listen(process.argv[2]);
