import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';

const ITEM_HEIGHT = 48;
export default function AdminMenu() {
    const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const adminItems = [
        {
            to: '/auth',
            name: 'Login/Logout',
        },
        {
            to: '/upload-resume',
            name: 'Resume',
        },
        {
            to: '/upload-biography',
            name: 'Biography',
        },
        {
            to: '/skills/import',
            name: 'Import Skills',
        },
    ];

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                    },
                }}
            >
                ({adminItems.map((item, index) =>
                    <MenuItem
                        key={index}
                        to={item.to}
                        component={AdapterLink}
                        onClick={handleClose}
                    >{item.name}
                    </MenuItem>,
                )})

            </Menu>
        </div>
    );
}
