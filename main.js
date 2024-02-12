// setTimeout(() => {
//   let request = new XMLHttpRequest()
//   request.open("GET", "./API.json")
//   request.responseType = 'json'
//   request.send()
//   request.onload = function() {
//     document.write(request.response.ahdev.codeGeek.articles[1].article)
//   }
// }, 1000)


function fnametow() {
  let request = new XMLHttpRequest()
  request.open("POST", "./API.json")
  request.responseType = 'json'
  request.setRequestHeader("Accept", "application/json")
  request.setRequestHeader("Content-type", "application/json")
  let bodyParams = `{
    'title' : 'ahmad',
    'ggggg' : 'hsjanjak'
  }`
  request.send(bodyParams)
  request.onload = function() {
    console.log(request.response)
  }
}

fnametow()