/// <reference types="cypress" />
const mainOneId = '643d69a5c3f7b9001cfa0941';
const mainTwoId = '643d69a5c3f7b9001cfa0946';
const bunId = '643d69a5c3f7b9001cfa093c';
const sauceId = '643d69a5c3f7b9001cfa0942';

const orderResponse = {
  success: true,
  name: 'Краторный spicy био-марсианский минеральный бургер',
  order: {
    ingredients: [
      {
        _id: '643d69a5c3f7b9001cfa0941',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa0946',
        name: 'Хрустящие минеральные кольца',
        type: 'main',
        proteins: 808,
        fat: 689,
        carbohydrates: 609,
        calories: 986,
        price: 300,
        image: 'https://code.s3.yandex.net/react/code/mineral_rings.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
        image_large:
          'https://code.s3.yandex.net/react/code/mineral_rings-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa0942',
        name: 'Соус Spicy-X',
        type: 'sauce',
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa093c',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0
      }
    ],
    _id: '66b1e2e1119d45001b4fdd7e',
    owner: {
      name: 'Юлиана',
      email: 'lozhkina_2021@list.ru',
      createdAt: '2024-07-11T10:10:29.765Z',
      updatedAt: '2024-07-12T17:35:42.095Z'
    },
    status: 'done',
    name: 'Краторный spicy био-марсианский минеральный бургер',
    createdAt: '2024-08-06T08:46:25.020Z',
    updatedAt: '2024-08-06T08:46:25.493Z',
    number: 48586,
    price: 2069
  }
};

describe('Constructor page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });

    cy.intercept('POST', 'api/auth/login', {
      fixture: 'login.json'
    });

    cy.intercept('GET', 'api/auth/user', {
      fixture: 'user.json'
    });

    cy.intercept('POST', 'api/orders', {
      fixture: 'order.json'
    }).as('createOrder');

    cy.setCookie(
      'accessToken',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGZhZjk1MTE5ZDQ1MDAxYjRmODA1MSIsImlhdCI6MTcyMjcwMDA5NywiZXhwIjoxNzIyNzAxMjk3fQ.Logf0eouXJVYuumZEH-tT7qzcqmdhls1tb5WUrd1WkM`
    );
    window.localStorage.setItem(
      'refreshToken',
      '2a51568ec61bbb7a77fea6f9bf1b3bb6c91121112775481d493eedac986746ee86331c261e901cc1'
    );

    cy.visit('/');

    // cy.get('body').then(($body) => {
    //   if ($body.find(`[data-cy=ingredient-${bunId}]`).length) {
    //     cy.log('Element found');
    //   } else {
    //     cy.log('Element not found');
    //   }
    // });
    cy.get(`[data-cy=ingredient-${mainOneId}]`).as('mainOne');
    cy.get(`[data-cy=ingredient-${mainTwoId}]`).as('mainTwo');
    cy.get(`[data-cy=ingredient-${bunId}]`).as('bun');
    cy.get(`[data-cy=ingredient-${sauceId}]`).as('sauce');
    cy.get('@bun').find('button').as('bunBtn');
    cy.get('@mainOne').find('button').as('mainOneBtn');
    cy.get('@mainTwo').find('button').as('mainTwoBtn');
    cy.get('@sauce').find('button').as('sauceBtn');
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  describe('Test loading', () => {
    it('Get ingredients request with success response', () => {
      cy.get('@bun').should('contain', 'Краторная булка N-200i');

      cy.get('@mainOne').should('contain', 'Биокотлета из марсианской Магнолии');

      cy.get('@mainTwo').should(
        'contain',
        'Филе Люминесцентного тетраодонтимформа'
      );

      cy.get('@sauce').should('contain', 'Соус Spicy-X');
    });
  });

  describe('Test adding ingredient', () => {
    it('Add ingredients to constructor by click add button on it', () => {
      cy.get('@bunBtn').click();
      cy.get('@mainOneBtn').click();
      cy.get('@mainTwoBtn').click();
      cy.get('@sauceBtn').click();

      cy.get(`[data-cy="bun-top-place-${bunId}"]`).should('exist');

      cy.get(`[data-cy="bun-bottom-place-${bunId}"]`).should('exist');

      cy.get(`[data-cy="ingredient-place-${mainOneId}"]`).should('exist');

      cy.get(`[data-cy="ingredient-place-${mainTwoId}"]`).should('exist');

      cy.get(`[data-cy="ingredient-place-${sauceId}"]`).should('exist');
    });
  });

  describe('Test ingredient in modal', () => {
    it('Open ingredient in modal by click on it', () => {
      cy.get('@bun').click();
      cy.location('pathname').should('eq', `/ingredients/${bunId}`);
      cy.get(`[data-cy="ingredient-details-${bunId}"]`).as(
        'bun-modal-ingredient'
      );
      cy.get('@bun-modal-ingredient').should('exist');

      cy.get('@bun-modal-ingredient')
        .find('h3')
        .should('contain', 'Краторная булка');
    });

    it('Close modal by click on close button', () => {
      cy.get('@bun').click();
      cy.get('[data-cy="modal-close"]').click();
      cy.location('pathname').should('eq', '/');
    });
  });

  describe('Test order', () => {
    it('Make order', () => {
      cy.get('@bunBtn').click();
      cy.get('@mainOneBtn').click();
      cy.get('@mainTwoBtn').click();
      cy.get('@sauceBtn').click();

      cy.get('[data-cy="order-button"]').click();

      cy.get('@createOrder')
        .wait('@createOrder')
        .then((intercept) => {
          expect(intercept.response?.statusCode).to.eq(200);
          expect(intercept.response?.body).to.deep.eq(orderResponse);
        });

      cy.get('[data-cy="modal-order-title"]').should('contain', '45888');

      cy.get('[data-cy="modal-close"]').click();

      cy.get('[data-cy="modal-overlay"]').should('not.exist');

      cy.get('[data-cy="burger-constructor"]')
        .find('div')
        .should('contain', 'Выберите булки');

      cy.get('[data-cy="burger-constructor"]')
        .find('ul')
        .find('div')
        .should('contain', 'Выберите начинку');
    });
  });
});
