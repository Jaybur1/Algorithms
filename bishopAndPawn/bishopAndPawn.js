const bishopAndPawn = (bishop, pawn) => {
    const board = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8
    }
    const pos = {
        bishop: {
            x: board[bishop[0]],
            y: parseInt(bishop[1])
        },
        pawn: {
            x: board[pawn[0]],
            y: parseInt(pawn[1])
        }
    };

    if ((pos.bishop.x + pos.bishop.y === pos.pawn.y + pos.pawn.x) || (pos.bishop.x + pos.pawn.y === pos.bishop.y + pos.pawn.x)) return true;


    return false;
}

console.log(bishopAndPawn('a1', 'c3'));