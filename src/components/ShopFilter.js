import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

import { setFilter } from '../actions/filters';

class ShopFilter extends Component {
    uniq = (arr, specs) => {
        // get unique values from array
        let newArr = arr.map(item => item[specs]);
        return [...new Set(newArr)]
    }

    setFilter = (item, specs) => {
        this.props.setFilter(item, specs);
    }
    boldText = (spec, item) => {
        const filter = this.props.filters.find(item => {
            return item.key === spec
        });
        if (filter) {
            const el = filter.val.some(element => element === item);
            if (el) {
                return 'bold'
            } else {
                return 'normal'
            }

        } else {
            return 'normal'
        }


    }

    render() {
        const { items, filtersList, category } = this.props;

        // checks what filters to show
        const categoryFilters = filtersList.find(item => item.category === category);
        console.log(categoryFilters);
        let showFilters;
        if (!categoryFilters) {
            showFilters = <Grid><h1>NO FILTERS</h1></Grid>;
        } else {
            showFilters = categoryFilters.filtersToShow.map(element => {
                // element = spec(brand, ram, camera, etc...)
                return (
                    <Grid item xs={3} sm={4} lg={12} spacing={1} key={element}>
                        <Paper>
                            <p style={{ textTransform: 'capitalize', fontSize: '20px' }}><b>{element}: </b></p>

                            {this.uniq(items, element).map(
                                item => (
                                    <div
                                        key={item}
                                        style={{ cursor: 'pointer', fontWeight: (this.boldText(element, item)) }}
                                        onClick={() => this.setFilter(item, element)}
                                    >{item}</div>)
                            )}
                        </Paper>
                    </Grid>)
            });
        }
        return (
            <div style={{ padding: '1px' }}>

                <Grid container spacing={2}>
                    {showFilters}
                </Grid>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (item, specs) => dispatch(setFilter(item, specs))
    }
}

export default connect(undefined, mapDispatchToProps)(ShopFilter);
