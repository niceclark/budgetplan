'use client'
import * as React from 'react';
import {
    AppBar,
    Container,
    Toolbar,
    Box,
    Typography,
    Chip,
    Icon,
    Menu,
    MenuItem,MenuList,
    IconButton,
    Tooltip,Avatar,Button
} from '@mui/material';
import {KeyboardArrowDown} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';


const pages = ['Cash Flow', 'ChangeMe', 'ChangeMe', 'ChangeMe', 'Log', 'More'];
const cashFlows = ['income_statement', '基金'];
const logs = ['DataLog', 'History'];
const mores = ['Configuration', 'Workflow', 'Setting'];
const usermenus = ['Configuration', 'Workflow', 'Setting'];



function FisNavbar() {
    /**
     * 使用React的useState钩子来管理导航锚点的元素引用。
     * anchorElNav用于存储当前被选中的导航项的HTMLElement引用，初始值为null。
     * setAnchorElNav用于更新anchorElNav的值，即设置当前导航项的元素引用。
     */
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/*logo和标题*/}
                    <Icons />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Budget Plan
                    </Typography>

                    {/*小于尺寸时，隐藏菜单按钮*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*大尺寸时，显示完整菜单按钮*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <><Button
                                id={`${page}-customized-button`}
                                aria-controls={open ? `${page}-customized-menu` : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDown/>}
                            >
                                {page}
                            </Button><Menu
                                id={`${page}-customized-menu`}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {mores.map((more) => (
                                    <MenuItem key={more} onClick={handleClose}>
                                        <Typography textAlign="center">{more}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu></>
                        ))}
                    </Box>


                    {/*用户头像菜单按钮*/}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {usermenus.map((usermenu) => (
                                <MenuItem key={usermenu} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{usermenu}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

function Icons() {
    return (
        <Chip color="primary" icon={<Icon>Clark</Icon>} label="Clark" />
    );
}


export default FisNavbar;