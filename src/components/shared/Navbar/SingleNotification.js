/* eslint-disable @next/next/no-img-element */

import { Badge, IconButton } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import useAxiosSecure from "@/app/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useSingleUser from "@/app/hooks/useSingleUser";

const SingleNotification = ({ seeNotification }) => {

	const { date, postedId, text, userEmail, userName, userPhoto, _id } = seeNotification || []
	const axiosSecure = useAxiosSecure()
	const [users, singleUserReload] = useSingleUser()

	const [formattedTimestamp, setFormattedTimestamp] = useState('');

	useEffect(() => {
		const convertTimestamp = () => {

			const timestamp = new Date(date);

			// Use the Intl.DateTimeFormat object with timeZone option
			const formatter = new Intl.DateTimeFormat('en-US', {
				//   timeZone: targetTimezone,
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				//   second: 'numeric',
				//   timeZoneName: 'short',
			});

			const formattedResult = formatter.format(timestamp);

			setFormattedTimestamp(formattedResult);
		};

		convertTimestamp();
	}, [date]);


	const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
				const deleteInfo = {
					userId: users[0]?._id,
					notificationsId: id
				}
                axiosSecure.put('/deleteNotification', deleteInfo)
                    .then(res => {
						console.log(res.status)
                        if (res.status = 200) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This food has been deleted.",
                                icon: "success"
                            });
							singleUserReload()
                        }
                    })
					.catch(error => {
                        console.error("Error:", error);
                        toast.error("Something was wrong");
                      });
            }
        });
    }


	return (
		<Link href={`/discussion/${postedId}`}>
			<div className="hover:bg-[#5f7c6d] rounded-md p-2 text-white cursor-pointer">
				<div className="flex items-center gap-3 ">
					<img className="w-16 h-16 rounded-full" src={userPhoto} alt="athor image" />
					<div>
						<div className="flex justify-between items-center">
							<h5 className="text-sm ">{formattedTimestamp}</h5>
							<IconButton 
							// onClick={()=>handleDelete(_id)}
							 sx={{ color: '#dedcdc', cursor: "pointer" }}>
								<CloseIcon sx={{ fontSize: '18px' }} />
							</IconButton>
						</div>
						<p> <span className="font-semibold">{userName}</span> {text}</p>
					</div>
				</div>


			</div>
		</Link>
	);
};

export default SingleNotification;