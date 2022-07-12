export const STATE = {
    idle: {
        status: 'idle',
        frameX: 7,
        frameY: 0,
    },
    jump: {
        status: 'jump',
        frameX: 7,
        frameY: 1
    },
    fall: {
        status: 'fall',
        frameX: 7,
        frameY: 2
    },
    run: {
        status: 'run',
        frameX: 9,
        frameY: 3
    },
    take_hit2: {
        status: 'take_hit2',
        frameX: 11,
        frameY: 4
    },
    sit: {
        status: 'sit',
        frameX: 5,
        frameY: 5
    },
    roll: {
        status: 'roll',
        frameX: 7,
        frameY: 6
    },
    slide: {
        status: 'slide',
        frameX: 7,
        frameY: 7
    },
    dead: {
        status: 'dead',
        frameX: 12,
        frameY: 8
    },
    take_hit1: {
        status: 'take_hit1',
        frameX: 4,
        frameY: 9
    },
}