export const formTemplate = [
  {
    type: 'text',
    id: 'name',
    placeholder: 'Имя',
  },
  {
    type: 'text',
    id: 'surename',
    placeholder: 'Фамилия',
  },
  {
    type: 'text',
    id: 'birthDate',
    placeholder: 'Дата рождения',
  },
  {
    type: 'text',
    id: 'phoneNumber',
    placeholder: 'Телефон',
  },
  {
    type: 'textarea',
    id: 'about',
    placeholder: 'О себе',
    rows: 7,
  },
  {
    type: 'textarea',
    id: 'technologyStack',
    placeholder: 'Стек технологий',
    rows: 7,
  },
  {
    type: 'textarea',
    id: 'aboutLastProject',
    placeholder: 'Описание последнего проекта',
    rows: 7,
  },
  {
    type: 'buttonsContainer',
    buttons: [
      {
        text: 'Сохранить',
      },
      {
        text: 'Отмена',
      },
    ],
  },
];
