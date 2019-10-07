import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShopItem extends Component {
    render() {
        return (
            <div>
                {this.props.items[0].name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        items: state.items
    })
};

export default connect(mapStateToProps)(ShopItem);

