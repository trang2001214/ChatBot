messages = document.getElementById('messages')
input = document.getElementById('input')
sellerblock = document.getElementById('sellerblock')
buyerblock = document.getElementById('buyerblock')

msgno = 0

products = {
	"mobile": { price: 3200000 },
	"tomato": { price: 10000000 },
	"rice": { price: 20000000 },
	"book": { price: 500000 },
	"laptop": { price: 6000000 },
	"chair": { price: 350000 }
}


function taketheinput(event) {
	// here is the js code for input processing
	//if they hit the enter key 
	if (event.key == "Enter" || onclick) {
		// create a buyer message block
		messages.innerHTML += buyerblock.outerHTML
		var today = new Date();
		var date = today.getHours() + ':'+today.getMinutes(2)
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = input.value
		messages.lastChild.childNodes[2].textContent = date
		// finally process the input 
		processinput(input.value.toLowerCase())
		input.value = ""

	}
}

function processinput(inputval) {
	if (inputval == "") {
		alert("Hãy nhập nội dung vào ô tin nhắn");
		document.getElementById("input").focus();
	}
	else {
		messages.innerHTML += sellerblock.outerHTML
		// and change its id
		var today = new Date();
		var date = today.getHours(2) + ':' + today.getMinutes(2)
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = reply(inputval)
		messages.lastChild.childNodes[2].textContent = date
	}

}



function reply(inputval) {
	result = inputval.match(/(how)|(\w+)/g)

	if (result.includes("how")) {
		return "fine"
	}
	if (result.includes("price")) {
		return recentproduct.price
	}

	a = "";
	result.forEach(function (product) {
		if (products.hasOwnProperty(product)) {
			a = "Yes we have " + product
			recentproduct = products[product]
		}
	})
	if (a) {
		return a;
	}

	return "xin lỗi, chúng tôi không có mặt hàng " + inputval + "!"
	// if (inputval === "How are you?") {
	// 	return "I am fine"
	// }
}