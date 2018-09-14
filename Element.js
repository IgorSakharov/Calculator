let Element = {
    changeOpaciti: function (element, value) {
        element.animate({
            opacity: value,
        });
    },

    getValueBottom: function (element) {

    return element.data('value');
    },

    outPutData: function(text) {
    $('#screen').append(text);
    },

    clearScreen: function () {
    $('#screen').empty()
    },
}