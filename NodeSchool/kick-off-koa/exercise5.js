var koa = require('koa');
var app = koa();

app.use(function*(next) {
    if (!this.request.is('application/json')) {
        return yield next;
    }

    // this.response.type ='application/json';

    this.body = {
        message: 'hi!'
    };
});

app.use(function*(){
	this.body = 'ok';
});


app.listen(process.argv[2]);
