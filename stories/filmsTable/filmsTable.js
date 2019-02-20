import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import Film from '../film/film.js';

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

class FilmsTable extends React.Component {
    constructor(props) {
        super(props);
        this.showFilms = this.showFilms.bind(this);
    }

    showFilms() {
        return this.props.films.map((film) => {
                return <Film src={film.src} name={film.name}></Film>
            } )
    }

    render() {
        return (
            <GridLayout>
            {this.showFilms()}
            </GridLayout>
        );
    }
}

export default FilmsTable;
