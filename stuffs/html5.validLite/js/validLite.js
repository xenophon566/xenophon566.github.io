/**
 * My ValidLite Plugin
 *
 * @Date    20131203
 * @Author  ShawnWu
 * @Version     release v4.0.20161202
 * @License     under the MIT License
 **/
var myPatterns = {
    require: /.+/, //required
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, //email
    mobile: /^09[0-9*]{8}$/, //cellphone
    visa: /^[0-9*]{4}$/, //visa card number
    idcard: /^[A-Z]{1}[12]{1}\d{8}$/, //Taiwan ID card number
    permit: /^[A-Z]{1}[ABCD]{1}\d{8}$/, //Taiwan residence permit
    address: /[0-9*]/, //Taiwan address
    telphone: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/, //Taiwan telephone
    vatnumber: /^\d{8}$/, //Taiwan company tax ID
    english: /^[A-Za-z]+$/, //english
    chinese: /^[\u0391-\uFFE5]+$/, //chinese
    integer: /^[-\+]?\d+$/, //integer
    decimal: /^[-\+]?\d+(\.\d+)?$/, //decimal
    unsafe: /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/ //unsafe
};

var mySettings = {
    getValid: 'body', //get validate DOM
    corMsgShow: false, //show an correct message
    errMsgShow: true, //show an error message
    corClassShow: false, //show an correct class
    errClassShow: true, //show an error class
    corClassName: 'correctClass', //correct class name
    errClassName: 'errorClass', //error class name
    corElem: 'span', //create an element of correct message
    errElem: 'span', //create an element of error message
    corElemClass: 'corElemClass', //class of correct element
    errElemClass: 'errElemClass' //class of error element
};

jQuery.fn.validLite = function(settings) {
    settings = jQuery.extend(true, {
        pattern: myPatterns, //default validate patterns
        setting: mySettings //default validate settings
    }, settings);

    this.getValidata = function(e) {
        var elem = e ? $(e) : $(settings.setting.getValid).find('[data-validata]');

        elem.each(function() {
            var opt = $(this).data("validata"),
                pattern = eval('settings.pattern.' + opt.pattern) || /.+/,
                errId = opt.error ? opt.error.errId || '' : undefined,
                errMsg = opt.error ? opt.error.errMsg || '' : undefined,
                errClass = opt.error ? opt.error.errClass || '' : undefined,
                corId = opt.correct ? opt.correct.corId || '' : undefined,
                corMsg = opt.correct ? opt.correct.corMsg || '' : undefined,
                corClass = opt.correct ? opt.correct.corClass || '' : undefined,
                mode = opt.mode || 1,
                testTrue = 1,
                testFalse = 0;

            if (mode == 'false') {
                testTrue = 0;
                testFalse = 1;
            }

            if ($(this).is(":visible"))
                pattern.test($(this).val()) ? $(this).data("validstatus", testTrue) : $(this).data("validstatus", testFalse);
            else
                $(this).data("validstatus", 1);

            if ($(this).is(":visible")) {
                if (pattern.test($(this).val())) {
                    if ($("#" + errId).size()) $("#" + errId).hide();
                    if (settings.setting.corMsgShow && corId) {
                        if (corId == 'alert') eval(corId)(corMsg);
                        else {
                            if ($("#" + corId).size()) $("#" + corId).show();
                            else {
                                var corElem = document.createElement(settings.setting.corElem);
                                corElem.id = corId;
                                corElem.className = settings.setting.corElemClass;
                                corElem.innerHTML = corMsg;
                                $(this).after(corElem);
                            }
                        }
                    }
                } else {
                    if ($("#" + corId).size()) $("#" + corId).hide();
                    if (settings.setting.errMsgShow && errId) {
                        if (errId == 'alert') eval(errId)(errMsg);
                        else {
                            if ($("#" + errId).size()) $("#" + errId).show();
                            else {
                                var errElem = document.createElement(settings.setting.errElem);
                                errElem.id = errId;
                                errElem.className = settings.setting.errElemClass;
                                errElem.innerHTML = errMsg;
                                $(this).after(errElem);
                            }
                        }
                    }
                }
            }

            if ($(this).is(":visible")) {
                if (pattern.test($(this).val())) {
                    var errorClass = errClass || settings.setting.errClassName;
                    if (errorClass) $(this).removeClass(errorClass);
                    if (settings.setting.corClassShow) {
                        var correctClass = corClass || settings.setting.corClassName;
                        if (correctClass) $(this).addClass(correctClass);
                    }
                } else {
                    var correctClass = corClass || settings.setting.corClassName;
                    if (correctClass) $(this).removeClass(correctClass);
                    if (settings.setting.errClassShow) {
                        var errorClass = errClass || settings.setting.errClassName;
                        if (errorClass) $(this).addClass(errorClass);
                    }
                }
            }
        });

        if (!e) {
            var validstatus = 1;
            elem.each(function() {
                var status = $(this).data("validstatus") || 0;
                validstatus *= status;
            });
            if (validstatus) validLite.clearValidata();
            return validstatus ? true : false;
        } else return $(e).data("validstatus") || 0;
    };

    this.clearValidata = function(e) {
        var elem = e ? $(e) : $(settings.setting.getValid).find('[data-validata]');

        elem.each(function() {
            var opt = $(this).data("validata"),
                errId = opt.error ? opt.error.errId || '' : undefined,
                errClass = opt.error ? opt.error.errClass || '' : undefined,
                corId = opt.correct ? opt.correct.corId || '' : undefined,
                corClass = opt.correct ? opt.correct.corClass || '' : undefined;

            if ($("#" + corId).size()) $("#" + corId).hide();
            if ($("#" + errId).size()) $("#" + errId).hide();

            if (settings.setting.corClassShow) {
                if (settings.setting.corClassName) $(this).removeClass(settings.setting.corClassName);
                if (corClass) $(this).removeClass(corClass);
            }
            if (settings.setting.errClassShow) {
                if (settings.setting.errClassName) $(this).removeClass(settings.setting.errClassName);
                if (errClass) $(this).removeClass(errClass);
            }
        });
    };
};

var validLite = new jQuery.fn.validLite();
