 function initBoxCss(num, domParent) {
	        var w = domParent.width()
	        var marginRight = parseFloat($(domMap[0]).css('marginRight'))
	        var itemW = (w - marginRight * (num -1)) / num
	        // console.log(w, marginRight, itemW)
	        domParent.children().each(function (index, val) {
	            if ((index + 1) % num === 0) {
	                $(this).css('marginRight', '0')
	            }
	            $(this).css({'width':Math.floor(itemW) + 'px','height':Math.floor(itemW)})
	        })
	    }