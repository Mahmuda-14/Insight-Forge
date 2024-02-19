/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useState } from "react";

const SingleNotification = ({ seeNotification }) => {

	const { date, postedId, text, userEmail, userName, userPhoto } = seeNotification || []

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


	return (
		<Link href={`/discussion/${postedId}`}>
			<div className="flex items-center gap-3 hover:bg-[#5f7c6d] rounded-md p-2 text-white cursor-pointer">
				<img className="w-16 h-16 rounded-full" src={userPhoto} alt="athor image" />
				<div>
					<h5 className="text-sm">{formattedTimestamp}</h5>
					<p> <span className="font-semibold">{userName}</span> {text}</p>
				</div>
			</div>
		</Link>
	);
};

export default SingleNotification;