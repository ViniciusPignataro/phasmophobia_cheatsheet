interface Ghost {
    name: string;
    evidences: string[];
    speed: number | string;
    ability: string[];
}

const ghosts: Ghost[] = [
    {
        name: 'Spirit',
        evidences: ['EMF 5','Spirit Box','Writing'],
        speed: 1.7,
        ability: ['When you smudge a spirit, it prevents it from hunting for 180 seconds (normally 90 seconds).']
    },
    {
        name: 'Wraith',
        evidences: ['EMF 5', 'Spirit Box','D.O.T.S'],
        speed: 1.4,
        ability: ['It will never step in a salt pile ou leave UV footsteps.', 'Can teleport to a player outside of a hunt, giving an EMF 2 reading.']
    },
    {
        name: 'Phantom', 
        evidences: ['Spirit Box','Ultraviolet','D.O.T.S'], 
        speed: 1.7, 
        ability: ['Much longer blink during hunts, making it seem almost invisible.', 'Will immediately disappear when you take a picture during an event.']
    },
    {
        name: 'Poltergeist', 
        evidences: ['Spirit Box','Ultraviolet','Writing'], 
        speed: 1.7, 
        ability: ['More likely to throw items, draining 2% sanity per item thrown.', 'During hunts, will throw a nearby object every .5 seconds.', 'can do an "explosion" of items.']
    },
    {
        name: 'Banshee', 
        evidences: ['Spirit Orb','Ultraviolet','D.O.T.S'], 
        speed: 1.7, 
        ability: ["Hunts based off target's sanity, and targets only one player, following them.", 'If target leaves the house, banshee will hunt normally.', 'If target dies, banshee will select new target', 'Increased chance for singing ghost events.','Has unique parabolic microphone sound: sounds like a scream.']
    },
    {
        name: 'Jinn', 
        evidences: ['EMF 5','Freezing Temp','Ultraviolet'], 
        speed: '1.7 / 2.5', 
        ability: ['When thebreaker is on and it gets line of sight with a player, it gets faster, but will slow down to normal speed when within 3m.', 'Can zap 25% sanity when near a player and the breaker is on. (leaves EMF reading at the breaker when it uses this ability).', 'Unable to turn off the breaker.']
    },
    {
        name: 'Mare', 
        evidences: ['Spirit Orb','Spirit Box','Writing'], 
        speed: 1.7, 
        ability: ['Can hunt at 60% sanity when the lights are off, 40% sanity when the lights are on', 'Unable to turn on a light.', 'Higher chance of performing a light breaking event.', 'Has a change to immeadiately switch a light off that has been turned on.']
    },
    {
        name: 'Revenant', 
        evidences: ['Spirit Orb','Freezing Temp','Writing'], 
        speed: '1 / 3', 
        ability: ['Will be very slow whe player location is unknown (1m/s), but will immediately speed up to 3m/s whe it sees a player.']
    },
    {
        name: 'Shade', 
        evidences: ['EMF 5','Freezing Temp','Writing'], 
        speed: 1.7, 
        ability: ['Ghost event chance increases the lower the average sanity is.', 'Will not throw objects if you are in the same room as it. nor hunt if there is a player nearby.']
    },
    {
        name: 'Demon', 
        evidences: ['Freezing Temp','Ultraviolet','Writing'], 
        speed: 1.7, 
        ability: ['Very agressive hunt wise.', 'Has a chance to hunt at any sanity.','Hunt cooldown is 20 seconds','Smudging will prevent it from hunting for 60 seconds (normally 90 seconds).', 'Crucifix range increased.']
    },
    {
        name: 'Yurei', 
        evidences: ['Spirit Orb','Freezing Temp','D.O.T.S'], 
        speed: 1.7, 
        ability: ['Has the ability to zap 15% sanity if a player is nearby, fully closing a door on its own.', 'When smudged, Yurei will be trapped in its room for a while.']
    },
    {
        name: 'Oni', 
        evidences: ['EMF 5','Freezing Temp','D.O.T.S'], 
        speed: 1.7, 
        ability: ['Unable to do "ghost mist" event.', 'Much more visible during a hunt, blinking a lot less.', 'Drain double the sanity when witnessing ghost events.']
    },
    {
        name: 'Yokai', 
        evidences: ['Spirit Orb','Spirit Box','D.O.T.S'], 
        speed: 1.7, 
        ability: ['Has a chance to hunting at 80% when players are talking nearby (50% otherwise).', 'During a hunt, unable to detect your voice or equipment further than 2.5m away.', 'Ghost activity increased when talking near it.']
    },
    {
        name: 'Hantu', 
        evidences: ['Spirit Orb','Freezing Temp','Ultraviolet'], 
        speed: '1.4 / 2.7', 
        ability: ['The lower the temps, the quicks a Hantu will be.', 'Does not increase speed with line of sight', 'Higher chance to turn off the breaker.', 'Will produce freezing breath during a hunt in any room if breaker is off.']
    },
    {
        name: 'Goryo', 
        evidences: ['EMF 5','Ultraviolet','D.O.T.S'], 
        speed: 1.7, 
        ability: ['D.O.T.S can only be seen through video camera, and when no one is in the room.', 'Will not leave room as often, and will never change favorite room.']
    },
    {
        name: 'Myling', 
        evidences: ['EMF 5','Ultraviolet','Writing'], 
        speed: 1.7, 
        ability: ['Can only be heard during a hunt at a range of 12 meters or less (normally 20 meters).', 'Myling will respond more on parabolic mic.']
    },
    {
        name: 'Onryo', 
        evidences: ['Spirit Orb','Spirit Box','Freezing Temp'], 
        speed: 1.7, 
        ability: ['Unable to hunt within 4m of a flame.', 'Will hunt if it blows out 3 flames.', 'May wander away from the candles and initiate a hunt.']
    },
    {
        name: 'The Twins', 
        evidences: ['EMF 5','Spirit Box','Freezing Temp'], 
        speed: '1.53 / 1.87', 
        ability: ['Able to interact with multiple objects at the same time in different rooms.', 'Can hunt at 110% speed or 90% speed, one of them starting from a different location from the ghost room.']
    },
    {
        name: 'Raiju', 
        evidences: ['EMF 5','Spirit Orb','D.O.T.S'], 
        speed: '1.7 2.5', 
        ability: ['Faster around electronics that are turned on: 50% speed without electronics, 65% speed with electronics.', 'Must be within 6m of equipment on small maps, 8m on medium maps and 10m on large maps. (headcam does not affect it).', 'When hunting, electronics will malfunction at 15m (normally 10m)']
    },
    {
        name: 'Obake', 
        evidences: ['EMF 5','Spirit Orb','Ultraviolet'], 
        speed: 1.7, 
        ability: ['Can leave a 6 fingered fingerprint.', '25% chance not to leave fingerprints, and able to cut fingerprints duration in half.', 'During hunts, has a chance to shapeshift.' ]
    },
    {
        name: 'The Mimic', 
        evidences: ['Spirit Box','Freezing Temp','Ultraviolet'], 
        speed: 1.7, 
        ability: ['Will produce a fake orbs evidence, even when playing with no evidence.', 'It mimics a ghost, and will change the ghost every 30 seconds to 2 minutes.']
    },
    {
        name: 'Moroi', 
        evidences: ['Spirit Box','Freezing Temp','Writing'], 
        speed: '1.5 / 2.25', 
        ability: ['Curses a player when they get a response on either spirit box or parabolic mic.', 'Curse causes the plasyers sanity to drain twice as fast, with lights and candles unable to prevent it.', 'To remove the curse, take sanity pills.', 'Smudging during a hunt will blind the Moroi for 12 seconds (normally 6).', 'The lower the player sanity, the faster the Moroi gets']
    },
    {
        name: 'Deogen', 
        evidences: ['Spirit Box','Writing','D.O.T.S'], 
        speed: 0.4, 
        ability: ['Unable to hide from it.', 'Fast when searching, but very slow when near player.', 'unique Spirit Box response: sounds like a growl or heavy breathing.']
    },
    {
        name: 'Thaye', 
        evidences: ['Spirit Orb','Writing','D.O.T.S'], 
        speed: '2.75 / 1', 
        ability: ['Thayes can age. They start young at the beginning of the game, making more active and agressive (hunts at 75% sanity and 2.5m/s).', 'Every 1-2 minutes near a Thaye, it has a chance of aging.', 'When old, it hunts at 15% sanity and 1m/s.', 'Does not have line of sight speed increase.']
    },
]

export default ghosts;