export const formTemplate = [
  {
    type: 'text',
    id: 'name',
    placeholder: 'Имя',
    invalidMessage: 'Имя должно начинаться с большой буквы',
  },
  {
    type: 'text',
    id: 'surename',
    placeholder: 'Фамилия',
    invalidMessage: 'Фамилия должна начинаться с большой буквы',
  },
  {
    type: 'date',
    id: 'birthDate',
    placeholder: 'Дата рождения',
  },
  {
    type: 'tel',
    id: 'phoneNumber',
    placeholder: 'Телефон',
    invalidMessage: 'Номер телефона должен быть формата 9-9999-99-99"',
  },
  {
    type: 'text',
    id: 'site',
    placeholder: 'Сайт',
    invalidMessage: 'Сайт должен начинаться с "https://"',
  },
  {
    type: 'textarea',
    id: 'about',
    placeholder: 'О себе',
    rows: 7,
    invalidMessage: 'Превышен лимит символов в поле',
  },
  {
    type: 'textarea',
    id: 'technologyStack',
    placeholder: 'Стек технологий',
    rows: 7,
    invalidMessage: 'Превышен лимит символов в поле',
  },
  {
    type: 'textarea',
    id: 'aboutLastProject',
    placeholder: 'Описание последнего проекта',
    rows: 7,
    invalidMessage: 'Превышен лимит символов в поле',
  },
  {
    type: 'buttonsContainer',
    buttons: [
      {
        id: 'submit',
        type: 'submit',
        text: 'Сохранить',
      },
      {
        id: 'cancel',
        type: 'cancel',
        text: 'Отмена',
      },
    ],
  },
];
