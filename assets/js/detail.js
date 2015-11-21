var $ = require('jquery');

require('./common/vtab');

require('../widgets/topbar/topbar');

require('../widgets/header/header');


$('#detail').vtab({
	navSelector:'.detail-tab ul',
	contSelector: '.detail-content'
});