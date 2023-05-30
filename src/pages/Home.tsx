import { Avatar, Breadcrumbs, Card, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Link, useLoaderData } from "react-router-dom";
import { styled, useTheme, emphasize } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export async function loader() {
    await new Promise((r) => setTimeout(r, 0));
    return "I came from the About.tsx loader function!";
}


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
export function Component() {
    let data = useLoaderData() as string;
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom:2 }}>
                <StyledBreadcrumb
                    component={Link}
                    to="/"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                />
                <StyledBreadcrumb component="a" href="#" label="Catalog" />
                <StyledBreadcrumb
                    label="Accessories"
                    // deleteIcon={<ExpandMoreIcon />}
                    // onDelete={handleClick}
                />
            </Breadcrumbs>
            <Grid>
                <Grid xs={12}>
                    <Card 
                        sx={{
                            padding: 1.5,
                        }}
                    >
                        <Typography variant="h5" component="div" gutterBottom>
                            h1. Heading
                        </Typography>
                        <Divider />
                        {/* List Item */}
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Work" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Vacation" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

Component.displayName = "HomePage";