function verificar() {
    var val = document.getElementById('valor')
    var res = document.getElementById('result')
     if (val.value.length == 0) {
        alert('Por favor insira um valor a ser convertido!')
     } else {
        var valor = Number(val.value)
        var moedaorg = document.getElementsByName('moedaorg') 
        var moeda = document.getElementsByName('moeda')
        var thi = '' 
        var converted = Number(thi.value)
        valor.toFixed(2) 
        var gal = '' 
        var gali = '' 
        if (moedaorg[0].checked) {
            gal = 'R$ reais'
            if (moeda[0].checked) {
                converted = valor 
                gali = 'R$ reais'
            } else if (moeda[1].checked) {
                converted = valor * 0.20
                gali = '$$ dólares'
            } else if (moeda[2].checked) {
                converted = valor * 0.18                
                gali = '€ euros'
            }
         } if (moedaorg[1].checked) {
            gal = '$$ dólares'
            if (moeda[0].checked) {
                converted = valor * 5.12
                gali = 'R$ reais'
            } else if (moeda[1].checked) {
                converted = valor 
                gali = '$$ dólares'
            } else if (moeda[2].checked) {
                converted = valor * 0.92
                gali = '€ euros'           
            }
         }  if (moedaorg[2].checked) {
            gal = '€ euros'
            if (moeda[0].checked) {
                converted = valor * 5.55
                gali = 'R$ reais'
            } else if (moeda[1].checked) {
                converted = valor / 0.92 
                gali = '$$ dólares'
            } else if (moeda[2].checked) {
                converted = valor 
                gali = '€ euros'
            }
         }
     } res.innerHTML = `${valor.toFixed(2)} ${gal} valem: ${converted.toFixed(2)} ${gali}`
}