async function call() { //essendo una funzione asincrona, anche se ci dovesse mettere tanto tempo per l'elaborazione, non bloccherebbe il resto dello script

    const url: string = 'https://628f5a240e69410599dade0b.mockapi.io/api/v1/users'
    let response = await fetch(url) //aspetta che l'elaborazione di destra sia finita

    /* 

    let all = Promise.All([
        fetch(urlUtenti).then(res=>res.json()),
        fetch(urlIndirizzi).then(res=>res.json()),
        fetch(urlNumeritelefono).then(res=>res.json()),
    ])
    
    */

    let json = await response.json()
    console.log(json);
    let { avatar, name } = json[0]
    console.log(avatar, name);

}
call()