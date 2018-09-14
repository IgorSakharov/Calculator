let item = $( '.item' );

item.click(function() {
	Element.changeOpaciti($( this ), 0.5)
    Calculate.saveValues(Element.getValueBottom($( this )))
});

$( '.symbol' ).click(function () {
    Calculate.setOperation(Element.getValueBottom($( this )))
    Element.clearScreen()
});

item.mouseout(function() {
	Element.changeOpaciti($( this ), 1)
});
