"use client"
import Navbar from "@/components/navbar"
import PlayerDetail from "@/components/playerdetail"
import PlayerList from "@/components/playerlist"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Player } from "@/model/player"
import { useState } from "react"


const players: Player[] = [
    { id: 1, firstname: "Hans", lastname: "Meier", position: "scrum half", img: "/image.png" },
    { id: 2, firstname: "Ueli", lastname: "Müller", position: "fly half", img: "" },
    { id: 3, firstname: "Franz", lastname: "Schmid", position: "prop", img: "" },
    { id: 5, firstname: "Fritz", lastname: "Keller", position: "hooker", img: "" },
    { id: 6, firstname: "Fritz", lastname: "Keller", position: "hooker", img: "" },
    { id: 7, firstname: "Fritz", lastname: "Keller", position: "hooker", img: "" },
    { id: 8, firstname: "Fritz", lastname: "Keller", position: "hooker", img: "" },
    { id: 9, firstname: "Fritz", lastname: "Keller", position: "hooker", img: "" },
    { id: 10, firstname: "Fritz", lastname: "Keller", position: "hooker", img: "" },
    { id: 11, firstname: "Fritz", lastname: "Keller", position: "hooker", img: "" },
]

export default function Players() {

    const [selectedPlayer, setSelectedPlayer] = useState(players[0])

    return (
        <>
        <Navbar />

        <main className="max-w-[1000px] m-auto">
        <ResizablePanelGroup direction="horizontal" className="rounded-lg border">

            <ResizablePanel defaultSize={50}>
                <ScrollArea className="max-h-[400px]">
                    <PlayerList players={players} selectPlayer={setSelectedPlayer}></PlayerList>
                </ScrollArea>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={50} className="my-2 ml-2">
                <PlayerDetail player={selectedPlayer}></PlayerDetail>
            </ResizablePanel>

        </ResizablePanelGroup>
        </main>
        </>
    )
}