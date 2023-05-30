import { Typography } from '@mui/material';
import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../features/listUserSlice';
import { RootState } from '../app/store';


export async function loader() {
    await new Promise((r) => setTimeout(r, 0));
    return "I came from the User.tsx loader function!";
}


export function Component() {
    let data = useLoaderData() as string;

    const user = useSelector((state: RootState) => state.userStore.userList);
    const dispatch = useDispatch();

    useEffect(() => {
        function fetchUser() {
            dispatch(getUser());
        }
        fetchUser();
        // console.log(user);
        
    }, []);
    return (
        <>
            <Typography paragraph>
                {console.log(user)}
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </>
    )
}

Component.displayName = "UserPage";