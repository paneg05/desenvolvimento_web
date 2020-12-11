var nota = prompt('digite a nota')
var faltas = prompt('digite o número de faltas')

var faltas_maximas = 15
var media = 7

if (faltas <= faltas_maximas && nota >= media){
    document.write('aprovado <br>')
}else{
    document.write('reprovado <br>')
}

//ternario
var resultado = ( faltas <= faltas_maximas && nota >= media ) ? 'aprovado' : 'reprovado'
document.write(resultado+'<br>')