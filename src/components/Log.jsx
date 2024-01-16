export default function Log({turns}) {

    return(
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} 가 {turn.square.row},{turn.square.col} 를 선택
                </li>
            ))}
        </ol>
    )
}