'use strict';
let password = '1111';
let input = document.querySelector('.osnova__input_1');
let habar = document.querySelector('.habar');
let openn = document.querySelector('.emodjila');
let opennn = document.querySelector('.emodjila2');
let xato = function () {
  document.querySelector('.label__input').style.color = 'red';
  document.querySelector('.osnova__input_1').style.borderBottom =
    '1px solid red';
  document.querySelector('.osnova__input_1').style.margin = '5px 0';
};
let togri = function () {
  document.querySelector('.osnova').style.left = '100%';
  input.value = '';
  document.querySelector('.label__input').style.color = 'rgb(47, 110, 165)';
  document.querySelector('.osnova__input_1').style.borderBottom =
    '1px solid gray';
  document.querySelector('.osnova__input_1').style.margin = '0';
};
let sms = function () {
  let load = document.createElement('div');
  load.classList.add('righ');
  load.innerText = habar.value;
  document.querySelector('.orta1').appendChild(load);

  let load9 = document.createElement('div');
  load9.classList.add('righ9');
  load9.innerText = habar.value;
  document.querySelector('.center1').appendChild(load9);

  habar.value = '';

  let currentDate = new Date();
  let soat = currentDate.getHours();
  let minut = currentDate.getMinutes();

  let vremya = document.createElement('div');
  vremya.classList.add('vremya');
  vremya.innerText = soat + ':' + minut;
  document.querySelector('.orta1').appendChild(vremya);

  //2

  let vremya9 = document.createElement('div');
  vremya9.classList.add('vremya9');
  vremya9.innerText = soat + ':' + minut;
  document.querySelector('.center1').appendChild(vremya9);
  document
    .querySelector('.orta1')
    .scrollTo(0, document.querySelector('.orta1').scrollHeight);
};

let back = function () {
  document.querySelector('.osnova').style.left = '0%';
  input.value = '';
  document.querySelector('.label__input').style.color = 'rgb(47, 110, 165)';
  document.querySelector('.osnova__input_1').style.borderBottom =
    '1px solid gray';
  document.querySelector('.osnova__input_1').style.margin = '0';
};
document
  .querySelector('.osnova__button_1')
  .addEventListener('click', function () {
    if (input.value === password) {
      togri();
    } else {
      xato();
    }
  });
document
  .querySelector('.osnova__button_2')
  .addEventListener('click', function () {
    window.close();
  });
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (input.value === password) {
      togri();
    } else {
      xato();
    }
  } else if (e.key === 'Escape') {
    back();
  }
});

document.querySelector('.zaebbal').addEventListener('click', function () {
  openn.classList.toggle('hidden');
});
document.querySelector('.zaebbal9').addEventListener('click', function () {
  opennn.classList.toggle('hidden');
});

let qs = [
  document.querySelector('.q1'),
  document.querySelector('.q2'),
  document.querySelector('.q3'),
  document.querySelector('.q4'),
  document.querySelector('.q5'),
  document.querySelector('.q6'),
];

qs.forEach(q => {
  q.addEventListener('click', function () {
    habar.value += this.textContent;
  });
});
document.querySelector('.sent').addEventListener('click', function () {
  if (habar.value != 0) {
    sms();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (habar.value != 0) {
      sms();
    }
  }
});
let q12 = document.querySelector('.q12');
let q22 = document.querySelector('.q22');
let q32 = document.querySelector('.q32');
let q42 = document.querySelector('.q42');
let q52 = document.querySelector('.q52');
let q62 = document.querySelector('.q62');
q12.addEventListener('click', function () {
  habba.value = habba.value + q12.textContent;
});
q22.addEventListener('click', function () {
  habba.value = habba.value + q22.textContent;
});
q32.addEventListener('click', function () {
  habba.value = habba.value + q32.textContent;
});
q42.addEventListener('click', function () {
  habba.value = habba.value + q42.textContent;
});
q52.addEventListener('click', function () {
  habba.value = habba.value + q52.textContent;
});
q62.addEventListener('click', function () {
  habba.value = habba.value + q62.textContent;
});
//2
let smos = function () {
  let loadd = document.createElement('div');
  loadd.classList.add('lef');
  loadd.innerText = habba.value;
  document.querySelector('.orta1').appendChild(loadd);

  let currentDate = new Date();
  let soat = currentDate.getHours();
  let minut = currentDate.getMinutes();

  let vremya2 = document.createElement('div');
  vremya2.classList.add('vremya2');
  vremya2.innerText = soat + ':' + minut;
  document.querySelector('.orta1').appendChild(vremya2);
  //2
  let loadd99 = document.createElement('div');
  loadd99.classList.add('righ99');
  loadd99.innerText = habba.value;
  document.querySelector('.center1').appendChild(loadd99);
  habba.value = '';
  let vremya99 = document.createElement('div');
  vremya99.classList.add('vremya99');
  vremya99.innerText = soat + ':' + minut;
  document.querySelector('.center1').appendChild(vremya99);
  document
    .querySelector('.center1')
    .scrollTo(0, document.querySelector('.center1').scrollHeight);
};

let habba = document.querySelector('.habba');
document.querySelector('.sent2').addEventListener('click', function () {
  if (habba.value != 0) {
    smos();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (habba.value != 0) {
      smos();
    }
  }
});
