import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../app/store';
import { getUserList } from '../features/userSlice';


export async function loader() {
    await new Promise((r) => setTimeout(r, 0));
    return "I came from the User.tsx loader function!";
}


export function Component() {
    let data = useLoaderData() as string;

    const datas = useSelector((state: RootState) => state.userReducer);
    const dispatch = useDispatch();

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getUserList(page));
    }, [page]);

    return (
        <>
            {
                (() => {
                    if (datas.loading === 'pending') {
                        return (
                            <div>Loading...</div>
                        )
                    } else if (datas.loading === 'succeeded') {
                        return (
                            (
                                <ul>
                                    {datas.entities.map((item: any) => (
                                        <li key={item.id}>{item.email}</li>
                                    ))}
                                </ul>
                            )
                        )
                    }else {
                        return (
                            <div>{datas.errorMessage}</div>
                        )
                    }
                    // if (user.isLoading) {
                    //     return (
                    //         <div>Loading...</div>
                    //     )
                    // }else if (user.isSuccess) {
                    //     return (
                    //         (
                    //             <ul>
                    //                 {user.data.map(user => (
                    //                     <li key={user.id}>{user.email}</li>
                    //                 ))}
                    //             </ul>
                    //         )
                    //     )
                    // }else {
                    //     return (
                    //         <div>{user.errorMessage}</div>
                    //     )
                    // }
                })()
            }
        </>
    )
}

Component.displayName = "UserPage";