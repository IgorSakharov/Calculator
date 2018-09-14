let Calculate = {
	firstValue: 0,
	secondValue: 0,
	operation: '',

	saveValues: function (value) {
		let type = typeof(value)
		if (type === 'number' && this.operation === '') {
			this.firstValue += value
			Element.outPutData(value);
		}
		if (type === 'number' && this.operation !== '') {
			this.secondValue += value
            Element.outPutData(value);
		}
	},

	calculateResult: function () {
		Element.clearScreen()
		let method = this.operation;
		console.log(this.firstValue);
		if (method === 'pluse') {
            Element.outPutData(this.plus())
		}
        if (method === 'divide') {
            Element.outPutData(this.divide)
        }
        if (method === 'minus') {
            Element.outPutData(this.minus())
        }
	},

	setOperation: function (value) {
		this.operation = value
	},

	plus: function () {
		return this.firstValue + this.secondValue
	},

	divide: function () {
		return this.firstValue / this.secondValue
	},

	minus: function () {
		return this.firstValue - this.secondValue
	}
}