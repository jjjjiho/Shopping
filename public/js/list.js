const goods = document.querySelectorAll('.good');
const cart = document.querySelector('#cart>table>tbody');
const totalElement = document.querySelector('#show_total');
let total = 0;

function addToCart () {
  goods.forEach(good => {
    good.lastElementChild.addEventListener('click', () => {
      const children = good.children;
      cart.innerHTML += `
          <tr align="center">
            <td>
              <a href="#">
                <img src=${children[0].src} width="56" height="56" />
              </a>
            </td>
            <td>${children[1].textContent}</td>
            <td>1</td>
            <td class="price">${(children[2].textContent.replace(',', '') + '원')
        .replace(' ', '')}</td>
            <td><button type="button" title="삭제" class="btn_del" onclick="deleteFromCart(this)">삭제</button></td>
          </tr>`;
      total += +children[2].textContent.replace(',', '');
      totalElement.textContent = total + '원';
    });
  });
}

function deleteFromCart (e) {
  const target = e.parentNode.parentNode;
  const price = target.children[3].textContent.replace('원', '');
  target.remove();
  total -= +price;
  totalElement.textContent = total + '원';
}

function init () {
  addToCart();
}

init();