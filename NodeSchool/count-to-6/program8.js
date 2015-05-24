console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function clean(str = ''){
	str = str.replace(/&/, '&amp;');
	str = str.replace(/\'/, '&#39;');
	str = str.replace(/\"/, '&quot;');
	str = str.replace(/</, '&lt;');
	str = str.replace(/>/, '&gt;');
	

	return str;
}

function html( pieces, ...input ) {
    // what goes here?
    // don't forget to return the escaped string!

    return pieces.reduce((str, piece, idx) => str += piece + clean(input[idx]) , '');
}
