function mask() {
    // console.log('EEEEEEntroou!1')

    $(function ($) {
        var input = $('.editable-field-input');
        input.on('keydown', function () {
            var key = event.keyCode || event.charCode

            if (key == 8 || key == 46) {
                return number_format(this, event, true)
            }
        });
    });

    $(".editable-field-input").keypress(function (event) {
        console.log('EEEEEEntroou!')
        number_format(this, event)
    })
}

mask()

var lista = []

function number_format(self, event, backspace = false) {

    var mask
    var final_mask

    var numbers = criar_lista(event)
    var lista_string = numbers

    if (backspace == true) {
        if (lista.length == 0) {
            return self.value = '0,00'
        }
        else {
            lista.pop()
            mask = add_mask(lista)
            final_mask = add_final_mask(mask, lista_string, event, true)

            self.value = final_mask
            return false
        }
    }

    if (event.keyCode == 13) {
        mask = add_mask(numbers)
        final_mask = add_final_mask(mask, lista_string, event)

        return self.value = final_mask
    }

    mask = add_mask(numbers)
    final_mask = add_final_mask(mask, lista_string, event)

    self.value = final_mask

}

function criar_lista(event) {
    if ("0123456789".indexOf(event.key) != -1) {
        lista.push(event.key)
    }
    return lista
}

function add_mask(numbers, decimals = 2, decimal = ',', thousands = '.', ) {
    var mask = ''

    numbers = numbers.join('').padStart(decimals + 1, "0")

    var splitNumbers = numbers.split("").reverse()

    splitNumbers.forEach(function (d, i) {
        if (i == decimals) {
            mask = decimal + mask
        }

        if (i > (decimals + 1) && ((i - 2) % (decimals + 1)) == 0) {
            mask = thousands + mask
        }

        mask = d + mask;
    })

    return mask
}
function add_final_mask(mask, lista_string, event, backspace = false) {
    if (lista_string.length == 0) {
        return '0,0'
    }
    else {
        if (event.keyCode != 13 && backspace == false) {
            mask = mask.split('')
            mask = mask.slice(0, -1)
            mask = mask.join('')
        }

        return mask
    }
}