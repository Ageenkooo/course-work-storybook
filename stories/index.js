import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Film from './film/film.js';
import FilmsTable from './filmsTable/filmsTable.js';

const myItems = [{ name: 'item 1', src: "https://cdn1-www.comingsoon.net/assets/uploads/2017/04/rampagefilming.jpg" }, { name: 'item2' , src: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/%D0%9B%D1%91%D0%B4_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2018%29.jpg/211px-%D0%9B%D1%91%D0%B4_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2018%29.jpg"}];

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )); 

storiesOf('Film', module)
  .add('simple', () => (
    <Film src="https://cdn1-www.comingsoon.net/assets/uploads/2017/04/rampagefilming.jpg" name="name"></Film>
  ));

storiesOf('FilmsTable', module)
  .add('simple', () => (
    <FilmsTable films={myItems}></FilmsTable>
  ));