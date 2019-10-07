import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Navigation() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        React filter
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Navigation;
