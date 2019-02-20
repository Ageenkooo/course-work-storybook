import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Film from './film/film.js';
import FilmsTable from './filmsTable/filmsTable.js';

const myItems = [{ name: 'item 1' }, { name: 'item2' }, { name: 'item3'}, { name: 'item 1' }, { name: 'item2' }, { name: 'item3'}];

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