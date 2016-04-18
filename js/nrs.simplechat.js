/**
 * @depends {nrs.js}
 */
var NRS = (function(NRS, $, undefined) {
    NRS.setup.p_simplechat = function() {
        $('#p_simplechat_startup_date_time').html(moment().format('LLL'));
    };

    NRS.pages.p_simplechat = function() {
        $('div#content').show();
        $('.data-empty-container').hide();
        $('.data-loading-container').hide();
        $('span#your_account').html(NRS.accountRS);
    };

    return NRS;
}(NRS || {}, jQuery));

//File name for debugging (Chrome/Firefox)
//@ sourceURL=nrs.dividends_scanner.js
