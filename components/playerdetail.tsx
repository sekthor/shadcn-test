import { Player } from "@/model/player";
import { Badge } from "./ui/badge";

type PlayerDetailProps = {
    player: Player
}

const PlayerDetail = ({player}:PlayerDetailProps) => {

    return (
        <div>
            <h1 className="text-lg">{player.firstname} {player.lastname}</h1>
            <Badge variant="outline">{player.position}</Badge>
        </div>
    )
}

export default PlayerDetail;