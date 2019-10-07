import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

import ShopTabs from './ShopTabs';
import ShopItems from './ShopItems';
import ShopFilter from './ShopFilter';


class Shop extends Component {

    filterCategory = (items) => {
        const { category } = this.props;
        let newArr;
        if (category === 'all') {
            newArr = items;
        } else {
            newArr = items.filter((item) => item.category === category);
        }
        return newArr
    }

    filterItems = (items) => {
        const { filters } = this.props;

        let newArr = this.filterCategory(items);
        let result;
        const filteredItems = newArr.filter(item => {

            // if filter(props) empty return all items
            if (filters.length !== 0) {

                filters.every(filter => {
                    let key = filter.key;
                    // key = specs(brand, camera, ram...)
                    // Compare filter with item
                    result = filter.val.some(ji => ji === item[key]);
                    return result
                });
            } else {
                result = true;
            }
            return result

        })
        return filteredItems;
    }

    render() {
        return (
            <div>
                <Paper>

                    <ShopTabs
                        categories={this.props.categories}
                        category={this.props.category}
                    />

                </Paper>
                <Grid container spacing={2} style={{ marginTop: '1rem' }}>
                    <Grid item xs={12} sm={12} lg={3} spacing={2}>
                        <Paper>

                            <ShopFilter
                                items={this.filterCategory(this.props.items)}
                                filters={this.props.filters}
                                filtersList={this.props.filtersList}
                                category={this.props.category}
                            />

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={9}>

                        <ShopItems
                            items={this.filterItems(this.props.items)}
                        />

                    </Grid>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    category: state.category,
    items: state.items,
    filters: state.filters,
    filtersList: state.filtersList
});

export default connect(mapStateToProps)(Shop);

