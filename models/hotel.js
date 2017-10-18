
var id = 0;
/**
 * Hotel constructor
 * @param paramsObj.title {string} - Hotel title text
 * @param paramsObj.image {string} - Hotel image
 * @constructor
 */
var Hotel = function(paramsObj) {
    this.id = id+=1;
    this.title = paramsObj.title || 'Hasn\'t title';
    this.image = paramsObj.image || 'http://via.placeholder.com/350x150'
};

module.exports = Hotel;