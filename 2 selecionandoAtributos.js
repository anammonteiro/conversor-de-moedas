// const element = document.querySelector('h1')

// element.innerHTML = "Hello World"

// textContent or innerText só alteram o texto

// const element = document.querySelector('h1')

// element.style.color = 'red'

/* const element = document.querySelector('button')

element.onclick = () => {
    alert('Fui pressionado')
}
*/

/* const element = document.querySelector('input')

element.addEventListener("keydown", function(event) {
  console.log(event);
});
*/

/* const element = document.querySelector('input')

element.addEventListener("keydown", function(event) {
  console.log(event.key);
});
*/

/* const element = document.querySelector('input')

element.addEventListener("keydown", function(event) {
  console.log(event.target.value);
});
*/

const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

const clickButton = () => {
    alert ('O botão foi clicado')
}

input.addEventListener('focus', () => {
    console.log('Dei um foco')
})

select.addEventListener('change', () => {
    console.log(select.value)
})

button.addEventListener('click', clickButton)








