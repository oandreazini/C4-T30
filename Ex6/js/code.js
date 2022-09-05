function watch(){
    //extraemos la hora, minutos y segundos del ordenador
    moment = new Date()
    hour = moment.getHours()
    minute = moment.getMinutes()
    second = moment.getSeconds()

    printHour = hour + " : " + minute + " : " + second //imprimimos los resultados dados anteriormente

    document.watch.watch.value = printHour
    setTimeout("watch()",1000) //actualiza cada segundo, llamando a la función
}

