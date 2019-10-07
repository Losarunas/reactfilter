import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from '@material-ui/core';

import { filterCategory } from '../actions/filters';

class ShopTabs extends Component {

    state = {
        categories: this.props.categories,
        value: 0
    }

    onChange = (i, newValue) => {
        const filter = this.state.categories[newValue - 1];
        console.log(filter);
        if (filter === undefined) {
            this.props.filterCategory('all');
        } else {

            this.props.filterCategory(filter);
        }
        this.setState({ value: newValue });
    }

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.onChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                {this.props.categories.map((filter) => {
                    return (
                        <Tab label={filter} key={filter} />
                    )
                }
                )}
            </Tabs>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterCategory: (category) => dispatch(filterCategory(category))
    }
}

export default connect(undefined, mapDispatchToProps)(ShopTabs);