var $ = require('jquery');

require('./common/vtab');

require('../../widgets/site-topbar/topbar');

require('../../widgets/site-header/header');


$('#detail').vtab({
	navSelector:'.detail-tab ul',
	contSelector: '.detail-content'
});