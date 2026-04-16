"use client";
import { useRouter } from 'next/navigation';
import dummyRooms from '@/data/dummyRooms.json';
import { useState } from 'react';

export default function RoomLobby() {
    const router = useRouter();
    const [rooms, setRooms] = useState(dummyRooms);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30 overflow-hidden relative font-sans">
            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[50%] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6 py-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white via-indigo-200 to-purple-300 text-transparent bg-clip-text">
                            Oasis
                        </h1>
                        <p className="text-gray-400 text-lg">Your collaborative workspace</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button
                            className="group relative inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-all duration-300 ease-out rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 overflow-hidden"
                            onClick={() => router.push("/room/joinRoom")}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Join Whiteboard
                        </button>

                        <button
                            className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-300 ease-out rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:scale-105 border border-indigo-400/30 overflow-hidden"
                            onClick={() => router.push("/room/createRoom")}
                        >
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Create Whiteboard
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-semibold text-gray-100 flex items-center">
                            <span className="w-2 h-8 rounded bg-indigo-500 mr-3"></span>
                            Recent Whiteboards
                        </h2>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">
                            {rooms.length} Active
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rooms.map((room) => (
                            <div
                                key={room.roomId}
                                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-300 hover:bg-white/[0.06] hover:border-indigo-500/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-100 mb-1 line-clamp-1 group-hover:text-indigo-300 transition-colors">
                                            {room.roomName}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-mono">
                                            ID: {room.roomId}
                                        </p>
                                    </div>
                                    <div className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center ${room.roomStatus === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                            room.roomStatus === 'Inactive' ? 'bg-gray-500/10 text-gray-400 border border-gray-500/20' :
                                                'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                        }`}>
                                        {room.roomStatus === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>}
                                        {room.roomStatus}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6">
                                    <button
                                        onClick={() => router.push(`/room/${room.roomId}`)}
                                        className="w-full py-2.5 rounded-xl bg-white/5 text-gray-300 text-sm font-medium border border-white/5 transition-all duration-200 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 group-hover:border-indigo-500/20 flex items-center justify-center"
                                    >
                                        Enter Room
                                        <svg className="w-4 h-4 ml-1.5 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {rooms.length === 0 && (
                        <div className="py-16 flex flex-col items-center justify-center text-center opacity-60">
                            <svg className="w-16 h-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <p className="text-xl text-gray-400">No recent whiteboards</p>
                            <p className="text-gray-500 mt-2">Create a new one to get started</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}