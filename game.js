kaplay({
    width: 800,
    height: 600,
    background: [255, 255, 255],
});

loadSprite("MainText", "sprites/Text-NaturesPeak.png");
loadSprite("background", "sprites/Background-MainMenu.png");
loadSprite("playText", "sprites/Text-Play.png");
loadSprite("HTPText", "sprites/Text-HTP.png");
loadSprite("CreditsText", "sprites/Text-Credits.png");
loadSprite("MountainSnow", "sprites/Mountain-Snowcapped.png");
loadSprite("MountainPlain", "sprites/Mountain-Plain.png");
loadSprite("MountainFiji", "sprites/Mountain-Fiji.png");
loadSprite("Man1", "sprites/ManClimbing1.png");
loadSprite("Woman1", "sprites/WomanClimbing1.png");
loadSprite("ContinueText", "sprites/Text-Continue.png");

scene("menu", () => {
    add([
        sprite("background"),
        pos(400, 300),
        anchor("center"),
        scale(0.4),
    ]);
    
    add([
        sprite("MountainSnow"),
        pos(200, 11),
        scale(0.9),
    ]);

    add([
        sprite("MountainPlain"),
        pos(450, 11),
        scale(0.9),
    ]);

    add([
        sprite("MountainFiji"),
        pos(400, 64),
        anchor("center"),
        scale(0.9),
    ]);


    add([
        rect(400, 80, { radius: 30 }),
        pos(400, 155),
        anchor("center"),
        color(255, 255, 255),
        area(),
    ])
    
    add([
        sprite("MainText"),
        pos(400, 150),
        anchor("center"),
        scale(0.19),
    ]);

    const playButton = add([
        rect(200, 60, { radius: 30 }),
        pos(400, 250),
        anchor("center"),
        color(255, 255, 255),
        area(),
    ]);
    add([
        sprite("playText"),
        pos(400, 250),
        anchor("center"),
        scale(0.08),
    ]);

    playButton.onClick(() => {
        go("Character Select");
    });

    playButton.onHover(() => {
        playButton.color = rgb(240, 240, 240);
    });

    playButton.onHoverEnd(() => {
        playButton.color = rgb(255, 255, 255);
    });

    const htpButton = add([
        rect(200, 60, { radius: 30 }),
        pos(400, 350),
        anchor("center"),
        color(255, 255, 255),
        area(),
    ]);
    add([
        sprite("HTPText"),
        pos(400, 350),
        anchor("center"),
        scale(0.08),
    ]);

    htpButton.onClick(() => {
        go("howtoplay");
    });

    htpButton.onHover(() => {
        htpButton.color = rgb(240, 240, 240);
    });

    htpButton.onHoverEnd(() => {
        htpButton.color = rgb(255, 255, 255);
    });

    const creditsButton = add([
        rect(200, 60, { radius: 30 }),
        pos(400, 450),
        anchor("center"),
        color(255, 255, 255),
        area(),
    ]);
    add([
        sprite("CreditsText"),
        pos(400, 450),
        anchor("center"),
        scale(0.08),
    ]);

    creditsButton.onClick(() => {
        go("credits");
    });

    creditsButton.onHover(() => {
        creditsButton.color = rgb(240, 240, 240);
    });

    creditsButton.onHoverEnd(() => {
        creditsButton.color = rgb(255, 255, 255);
    });
});

scene("Character Select", () => {
   
    const WomanPlayer = add([
        sprite("Woman1"),
        pos(500, 150),
        scale(0.8),

    ]);

    const ManPlayer = add([
        sprite("Man1"),
        pos(200, 150),
        scale(0.8),
    ]);

    ManPlayer.onClick(() => {  
        go("Map Select");

    });

    WomanPlayer.onClick(() => {
        go("Map Select");
    });

    onKeyPress("escape", () => {
        go("menu");
    });
});

scene("howtoplay", () => {
    add([
        text("How To Play instructions here"),
        pos(400, 300),
        anchor("center"),
    ]);
    
    onKeyPress("escape", () => {
        go("menu");
    });
});

scene("credits", () => {
    add([
        text("Credits go here"),
        pos(400, 300),
        anchor("center"),
    ]);
    
    onKeyPress("escape", () => {
        go("menu");
    });
});