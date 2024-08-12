Ecwid.OnAPILoaded.add(function() {
	Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "PRODUCT") {
       console.log(
        `
       Congretulation Page loaded!
       Ecwid store ID is: ${Ecwid.getOwnerId()}
       Product ID is: ${page.productId}
        `
       )
    }
	})
})
