"use client"
import { Player } from "@/model/player";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Dispatch, SetStateAction } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

type PlayerListProps = {
    players: Player[]
    selectPlayer: Dispatch<SetStateAction<Player>>
}
let selectedPlayer: Player

const PlayerList = ({players, selectPlayer}: PlayerListProps) => {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Avatar</TableHead>
                    <TableHead>Firstname</TableHead>
                    <TableHead>Lastname</TableHead>
                    <TableHead>Position</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {players.map(player =>

                <TableRow key={player.id} onClick={() => {selectPlayer(player)}}>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src={player.img}></AvatarImage>
                            <AvatarFallback>{player.firstname}</AvatarFallback>
                        </Avatar>
                    </TableCell>
                    <TableCell>{player.firstname}</TableCell>
                    <TableCell>{player.lastname}</TableCell>
                    <TableCell>
                        <Badge variant="outline">{player.position}</Badge>
                    </TableCell>
                </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default PlayerList;