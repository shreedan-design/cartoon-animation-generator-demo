const app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0xeeeeee });
document.getElementById('canvas-container').appendChild(app.view);

// Load Spine character
PIXI.Loader.shared.add('hero', 'https://raw.githubusercontent.com/EsotericSoftware/spine-runtimes/4.1/spine-ts/example/assets/spineboy-pro.json')
.load((loader, resources) => {
    const hero = new PIXI.spine.Spine(resources.hero.spineData);
    hero.x = app.screen.width / 2;
    hero.y = app.screen.height - 50;
    hero.scale.set(0.5);
    app.stage.addChild(hero);

    hero.state.setAnimation(0, 'walk', true);

    document.getElementById('jumpBtn').addEventListener('click', () => {
        hero.state.setAnimation(0, 'jump', false);
        hero.state.addAnimation(0, 'walk', true, 0);
    });
});
