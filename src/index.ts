function component() {
    const element = document.getElementById('content');

    element.innerHTML = "<h1>Olá Mundo!</h1>";
    element.innerHTML += "<h1>Olá Mundo 2!</h1>";

    return element;
  }
  component();