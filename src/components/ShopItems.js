import React, { Component } from 'react';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


class ShopItems extends Component {

    onClick = () => {
        console.log('test');
    }
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    {this.props.items.map((item) => {
                        return (
                            <Grid item xs={12} sm={4} lg={4} xl={3} key={item.id}>
                                <Card onClick={this.onClick}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={item.brand + ' ' + item.version}
                                            height="200"
                                            image="https://dummyimage.com/600x400/000/fff"
                                            title={item.brand + ' ' + item.version}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.brand + ' ' + item.version}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                Price: {item.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Check
                                    </Button>
                                        <Button size="small" color="primary">
                                            Add to cart
                                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </div>
        )
    }
}




export default ShopItems;