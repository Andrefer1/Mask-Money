function mask() {
    console.log('EEEEEEntroou!1')
    $(".editable-field-input").keypress(function (event) {
        console.log('EEEEEEntroou!2')
        number_format(this, event)
        console.log('EEEEEEntroou!3')
    })
}

mask()

var lista = []

function number_format(self, event, decimals = 2, decimal = ',', thousands = '.', pre = 'R$ ') {
    var mask = ''

    var numbers = criar_lista(event)
    var lista_string = numbers
    // console.log(numbers.length)
    // console.log('LISTA - ', lista_string)
    console.log('NUMBERS - ', numbers)

    numbers = numbers.join('').padStart(decimals + 1, "0")
    console.log(numbers)

    var splitNumbers = numbers.split("").reverse()

    splitNumbers.forEach(function (d, i) {
        // console.log('DDDD', d)
        // console.log('IIII', i)
        if (i == decimals) {
            mask = decimal + mask
        }

        if (i > (decimals + 1) && ((i - 2) % (decimals + 1)) == 0) {
            mask = thousands + mask
        }

        mask = d + mask;
    })

    // console.log(numbers)
    console.log(mask)

    if (lista_string.length == 1) {
        self.value = pre + '0,0'
    }
    else {
        mask = mask.split('')
        mask = mask.slice(0, -1)
        mask = mask.join('')

        self.value = pre + mask
    }
}

function criar_lista(event) {
    if ("0123456789".indexOf(event.key) != -1) {
        lista.push(event.key)
    }
    return lista
}