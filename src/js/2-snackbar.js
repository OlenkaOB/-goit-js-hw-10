import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]').value;
  const stateInput = document.querySelector(
    'input[name="state"]:checked'
  ).value;
  const delay = parseInt(delayInput);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInput === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '18px',
        messageLineHeight: '20px',
        backgroundColor: 'rgb(125, 218, 88)',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '18px',
        messageLineHeight: '20px',
        backgroundColor: 'rgb(248, 108, 109)',
        position: 'topRight',
      });
    });
});
