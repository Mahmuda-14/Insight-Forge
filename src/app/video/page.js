// 'use client'

// // import React, { useState, useCallback, useEffect } from "react";
// // import { userouter.push } from "react-router.push-dom";
// // import { useSocket } from "../context/SocketProvider";

// import { useCallback, useEffect, useState } from "react";
// import useSocket from "../hooks/useSocket";
// import { useRouter } from "next/navigation";
// import Room from "./[id]/page";

// // import Room from "./Room";

// const Video = () => {
//   const [email, setEmail] = useState("");
//   const [room, setRoom] = useState("");

//   const socket = useSocket();
//   console.log(socket)
//   const router = useRouter();

//   const handleSubmitForm = useCallback(
//     (e) => {
//       e.preventDefault();
//       console.log({email, room})
//       socket.emit("room:join", { email, room });
//     },
//     [email, room, socket]
//   );

//   const handleJoinRoom = useCallback(
//     (data) => {
//       const { email, room } = data;
//       router.push(`/room/${room}`);
//     },
//     [router]
//   );

//   // router.push.push('/dashboard')
 

//   useEffect(() => {
//     socket.on("room:join", handleJoinRoom);
//     return () => {
//       socket.off("room:join", handleJoinRoom);
//     };
//   }, [socket, handleJoinRoom]);

//   return (
//     <div className=" m-20"> 
//       <h1>Lobby</h1>
//       <form onSubmit={handleSubmitForm}>
//         <label htmlFor="email">Email ID</label>
//         <input className=" border-2"
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <label htmlFor="room">Room Number</label>
//         <input
//           type="text"
//           id="room"
//           value={room}
//           onChange={(e) => setRoom(e.target.value)}
//         />
//         <br />
//       <button type="submit" className="">Join</button>
//       </form>
//       <div className=" mt-6">
//       <Room></Room>
//       </div>
//     </div>
//   );
// };

// export default Video;