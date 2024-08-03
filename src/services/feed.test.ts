import { getFeedsAll, feedReducer, initialState, resetFeed } from './feed';

const payload = {
  orders: [
    {
      _id: '66ae4a7d119d45001b4fd5d8',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный астероидный бессмертный альфа-сахаридный экзо-плантаго био-марсианский бургер',
      createdAt: '2024-08-03T15:19:25.958Z',
      updatedAt: '2024-08-03T15:19:26.498Z',
      number: 48341
    },
    {
      _id: '66ae4a12119d45001b4fd5d2',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный space минеральный люминесцентный бургер',
      createdAt: '2024-08-03T15:17:38.822Z',
      updatedAt: '2024-08-03T15:17:39.274Z',
      number: 48340
    },
    {
      _id: '66ae49e2119d45001b4fd5d0',
      ingredients: ['643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2024-08-03T15:16:50.906Z',
      updatedAt: '2024-08-03T15:16:51.367Z',
      number: 48339
    },
    {
      _id: '66ae498b119d45001b4fd5cd',
      ingredients: ['643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный бургер',
      createdAt: '2024-08-03T15:15:23.978Z',
      updatedAt: '2024-08-03T15:15:24.511Z',
      number: 48338
    },
    {
      _id: '66ae470e119d45001b4fd5ca',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T15:04:46.042Z',
      updatedAt: '2024-08-03T15:04:46.494Z',
      number: 48337
    },
    {
      _id: '66ae45ef119d45001b4fd5c8',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T14:59:59.149Z',
      updatedAt: '2024-08-03T14:59:59.589Z',
      number: 48336
    },
    {
      _id: '66ae415d119d45001b4fd5bb',
      ingredients: ['643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный бургер',
      createdAt: '2024-08-03T14:40:29.314Z',
      updatedAt: '2024-08-03T14:40:29.802Z',
      number: 48335
    },
    {
      _id: '66ae411b119d45001b4fd5b9',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный альфа-сахаридный бургер',
      createdAt: '2024-08-03T14:39:23.100Z',
      updatedAt: '2024-08-03T14:39:23.502Z',
      number: 48334
    },
    {
      _id: '66ae3d39119d45001b4fd5b1',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-08-03T14:22:49.020Z',
      updatedAt: '2024-08-03T14:22:49.563Z',
      number: 48333
    },
    {
      _id: '66ae3a2a119d45001b4fd5a7',
      ingredients: ['643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-08-03T14:09:46.550Z',
      updatedAt: '2024-08-03T14:09:46.989Z',
      number: 48332
    },
    {
      _id: '66ae37b1119d45001b4fd5a1',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Традиционный-галактический флюоресцентный био-марсианский бургер',
      createdAt: '2024-08-03T13:59:13.742Z',
      updatedAt: '2024-08-03T13:59:14.217Z',
      number: 48331
    },
    {
      _id: '66ae35da119d45001b4fd59b',
      ingredients: ['643d69a5c3f7b9001cfa093e', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T13:51:22.095Z',
      updatedAt: '2024-08-03T13:51:22.518Z',
      number: 48330
    },
    {
      _id: '66ae3516119d45001b4fd59a',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный фалленианский бургер',
      createdAt: '2024-08-03T13:48:06.553Z',
      updatedAt: '2024-08-03T13:48:07.026Z',
      number: 48329
    },
    {
      _id: '66ae34d0119d45001b4fd598',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный spicy бургер',
      createdAt: '2024-08-03T13:46:56.744Z',
      updatedAt: '2024-08-03T13:46:57.175Z',
      number: 48328
    },
    {
      _id: '66ae34bd119d45001b4fd597',
      ingredients: ['643d69a5c3f7b9001cfa093e', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T13:46:37.709Z',
      updatedAt: '2024-08-03T13:46:38.192Z',
      number: 48327
    },
    {
      _id: '66ae34ae119d45001b4fd596',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный фалленианский бургер',
      createdAt: '2024-08-03T13:46:22.092Z',
      updatedAt: '2024-08-03T13:46:22.513Z',
      number: 48326
    },
    {
      _id: '66ae3372119d45001b4fd593',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-08-03T13:41:06.987Z',
      updatedAt: '2024-08-03T13:41:07.501Z',
      number: 48325
    },
    {
      _id: '66ae3187119d45001b4fd588',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-03T13:32:55.566Z',
      updatedAt: '2024-08-03T13:33:04.873Z',
      number: 48324
    },
    {
      _id: '66ae309e119d45001b4fd585',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-03T13:29:02.553Z',
      updatedAt: '2024-08-03T13:29:03.016Z',
      number: 48323
    },
    {
      _id: '66ae2fa6119d45001b4fd581',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный минеральный бургер',
      createdAt: '2024-08-03T13:24:54.288Z',
      updatedAt: '2024-08-03T13:24:54.784Z',
      number: 48322
    },
    {
      _id: '66ae2f85119d45001b4fd580',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный альфа-сахаридный бургер',
      createdAt: '2024-08-03T13:24:21.976Z',
      updatedAt: '2024-08-03T13:24:22.481Z',
      number: 48321
    },
    {
      _id: '66ae2f3d119d45001b4fd57d',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный экзо-плантаго астероидный бургер',
      createdAt: '2024-08-03T13:23:09.160Z',
      updatedAt: '2024-08-03T13:23:09.609Z',
      number: 48320
    },
    {
      _id: '66ae2db5119d45001b4fd579',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T13:16:37.143Z',
      updatedAt: '2024-08-03T13:16:37.594Z',
      number: 48319
    },
    {
      _id: '66ae2c52119d45001b4fd577',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-03T13:10:42.924Z',
      updatedAt: '2024-08-03T13:10:43.376Z',
      number: 48318
    },
    {
      _id: '66ae2987119d45001b4fd56a',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-03T12:58:47.654Z',
      updatedAt: '2024-08-03T12:58:48.278Z',
      number: 48317
    },
    {
      _id: '66ae2968119d45001b4fd569',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-03T12:58:16.242Z',
      updatedAt: '2024-08-03T12:58:16.675Z',
      number: 48316
    },
    {
      _id: '66ae28a6119d45001b4fd567',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-08-03T12:55:02.796Z',
      updatedAt: '2024-08-03T12:55:03.298Z',
      number: 48315
    },
    {
      _id: '66ae2883119d45001b4fd566',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный люминесцентный бургер',
      createdAt: '2024-08-03T12:54:27.501Z',
      updatedAt: '2024-08-03T12:54:27.938Z',
      number: 48314
    },
    {
      _id: '66ae285c119d45001b4fd564',
      ingredients: ['643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-08-03T12:53:48.272Z',
      updatedAt: '2024-08-03T12:53:48.815Z',
      number: 48313
    },
    {
      _id: '66ae27e5119d45001b4fd561',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-08-03T12:51:49.084Z',
      updatedAt: '2024-08-03T12:51:49.516Z',
      number: 48312
    },
    {
      _id: '66ae2732119d45001b4fd560',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-08-03T12:48:50.284Z',
      updatedAt: '2024-08-03T12:48:51.274Z',
      number: 48311
    },
    {
      _id: '66ae2732119d45001b4fd55f',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-08-03T12:48:50.270Z',
      updatedAt: '2024-08-03T12:48:51.179Z',
      number: 48310
    },
    {
      _id: '66ae2638119d45001b4fd557',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский метеоритный бургер',
      createdAt: '2024-08-03T12:44:40.869Z',
      updatedAt: '2024-08-03T12:44:41.334Z',
      number: 48309
    },
    {
      _id: '66ae260a119d45001b4fd556',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T12:43:54.578Z',
      updatedAt: '2024-08-03T12:43:55.081Z',
      number: 48308
    },
    {
      _id: '66ae25ce119d45001b4fd553',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T12:42:54.551Z',
      updatedAt: '2024-08-03T12:42:55.290Z',
      number: 48307
    },
    {
      _id: '66ae2549119d45001b4fd552',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T12:40:41.162Z',
      updatedAt: '2024-08-03T12:40:41.693Z',
      number: 48306
    },
    {
      _id: '66ae23f9119d45001b4fd54f',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-03T12:35:05.894Z',
      updatedAt: '2024-08-03T12:35:06.398Z',
      number: 48305
    },
    {
      _id: '66ae23bb119d45001b4fd54e',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T12:34:03.172Z',
      updatedAt: '2024-08-03T12:34:03.601Z',
      number: 48304
    },
    {
      _id: '66ae201a119d45001b4fd53a',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный люминесцентный бургер',
      createdAt: '2024-08-03T12:18:34.279Z',
      updatedAt: '2024-08-03T12:18:34.731Z',
      number: 48303
    },
    {
      _id: '66ae1c7f119d45001b4fd530',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный астероидный био-марсианский метеоритный бургер',
      createdAt: '2024-08-03T12:03:11.058Z',
      updatedAt: '2024-08-03T12:03:11.581Z',
      number: 48302
    },
    {
      _id: '66ae1b69119d45001b4fd529',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2024-08-03T11:58:33.801Z',
      updatedAt: '2024-08-03T11:58:34.272Z',
      number: 48301
    },
    {
      _id: '66ae17f7119d45001b4fd523',
      ingredients: ['643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-08-03T11:43:51.973Z',
      updatedAt: '2024-08-03T11:43:52.487Z',
      number: 48300
    },
    {
      _id: '66ae1541119d45001b4fd513',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-03T11:32:17.753Z',
      updatedAt: '2024-08-03T11:32:18.181Z',
      number: 48299
    },
    {
      _id: '66ae0f5d119d45001b4fd506',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный люминесцентный бургер',
      createdAt: '2024-08-03T11:07:09.265Z',
      updatedAt: '2024-08-03T11:07:09.778Z',
      number: 48298
    },
    {
      _id: '66ae0f51119d45001b4fd504',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T11:06:57.748Z',
      updatedAt: '2024-08-03T11:06:58.223Z',
      number: 48297
    },
    {
      _id: '66ae0b6d119d45001b4fd4f7',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный space бургер',
      createdAt: '2024-08-03T10:50:21.164Z',
      updatedAt: '2024-08-03T10:50:21.597Z',
      number: 48296
    },
    {
      _id: '66ae0500119d45001b4fd4e7',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T10:22:56.348Z',
      updatedAt: '2024-08-03T10:22:56.836Z',
      number: 48295
    },
    {
      _id: '66adfa85119d45001b4fd4d0',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-08-03T09:38:13.464Z',
      updatedAt: '2024-08-03T09:38:13.920Z',
      number: 48294
    },
    {
      _id: '66adf83a119d45001b4fd4c8',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-03T09:28:26.787Z',
      updatedAt: '2024-08-03T09:28:27.270Z',
      number: 48293
    },
    {
      _id: '66adef4f119d45001b4fd4b1',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-08-03T08:50:23.552Z',
      updatedAt: '2024-08-03T08:50:23.979Z',
      number: 48292
    }
  ],
  total: 47967,
  totalToday: 170,
  isFeedLoading: false
};

describe('Test feed slice', () => {
  it('get feeds', () => {
    const newState = feedReducer(initialState, {
      type: getFeedsAll.fulfilled.type,
      payload
    });
    expect(newState).toEqual(payload);
  });

  it('reset feed', () => {
    const newState = feedReducer(initialState, {
      type: resetFeed.type
    });
    expect(newState).toEqual(initialState);
  });
});
