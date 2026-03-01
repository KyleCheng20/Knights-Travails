function knightMoves(start, end){
    const moves = [
        [2, 1], [2, -1],
        [1, 2], [1, -2],
        [-2, 1], [-2, -1],
        [-1, 2], [-1, -2]
    ];

    function isValidMove(x, y){
        return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    }

    // Return an array of all valid moves a knight can traverse from a given position
    function getValidMoves([x, y]){
        const validMoves = [];

        for(let [dx, dy] of moves){
            let newX = dx + x;
            let newY = dy + y;

            if(isValidMove(newX, newY)) validMoves.push([newX, newY]);
        }

        return validMoves;
    }

    const queue = [{
        position: start,
        path: [start]
    }];
    const visited = new Set();
    visited.add(start.toString());

    while(queue.length > 0){
        let {position, path} = queue.shift();
        let [x, y] = position;

        // If reached end position
        if(end[0] === x && end[1] === y){
            console.log(`You made it in ${path.length - 1} moves! Here's your path: \n`);
            path.forEach(element => console.log(element));
            return;
        }

        // Check unvisited neighbors
        for(let nextPosition of getValidMoves(position)){
            if(!visited.has(nextPosition.toString())){
                visited.add(nextPosition.toString());
                queue.push({
                    position: nextPosition,
                    path: [...path, nextPosition]
                });
            }
        };
    }
}

export { knightMoves }