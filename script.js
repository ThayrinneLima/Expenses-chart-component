var dados = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
  var barras = document.querySelectorAll('.graphicBar')
  var texts = document.querySelectorAll(".textBar")
  window.onload = (event) =>{
   
    var hoje = new Date();
   
    var diaSemana = hoje.toString().split(" ")[0] // mon, tue, etc
    var index = dados.findIndex(x=> x.day == diaSemana.toLocaleLowerCase())
    barras[index].classList.add('active')
        for(let i =0;i<dados.length;i++){
        barras[i].style.height = `${dados[i]['amount'] * 1.6}%`;
        texts[i].innerText = `$${dados[i].amount}`
    }
    

};