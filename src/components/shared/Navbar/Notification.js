/* eslint-disable @next/next/no-img-element */
'use client'
import useSingleUser from "@/app/hooks/useSingleUser";
import SingleNotification from "./SingleNotification";
import { useEffect, useState } from "react";
import useAuth from "@/app/hooks/useAuth";

const Notification = () => {
    const [singleUser, singleUserReload] = useSingleUser()
    const {user} = useAuth()
    const [filterNotification, setFilterNotification] = useState([]);

    useEffect(() => {
        //   const filterNotification = .filter((notification) => notification.userEmail === user?.email);
    
          const sortedUserNotification = singleUser[0]?.seeNotifications?.sort((a, b) => {
            const timeA = new Date(a.date);
            const timeB = new Date(b.date);
            return timeB - timeA;
          });
    
          setFilterNotification(sortedUserNotification);
    
      }, [singleUser, user]);

    return (
        <div className="">
            <div className="scrollBar fixed max-h-[88vh] rounded-lg bg-[#6c8378] top-20 right-2 w-[350px] z-10 overflow-y-auto">
                <div className="py-3 px-4 text-white">
                    <h1 className="text-2xl font-semibold mb-4">Notifications</h1>

                    {
                        singleUser[0]?.seeNotifications && singleUser[0]?.seeNotifications?.length > 0 ? (

                            filterNotification?.map(seeNotification => <SingleNotification key={seeNotification?._id} seeNotification={seeNotification}></SingleNotification>)

                        ) : (
                            <p className="text-center">No notification available.</p>
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Notification;