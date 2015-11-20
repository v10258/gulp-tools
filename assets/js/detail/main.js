
var $ = require('jquery');

//require('../../../vendor/bootstrap/dist/js/bootstrap.js');

require('bootstrap')

require('../common/vtab');

require('../common/cookie')


$('#detail').vtab({
	navSelector:'.detail-tab ul',
	contSelector: '.detail-content'
});

