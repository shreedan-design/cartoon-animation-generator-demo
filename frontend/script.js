const app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0xeeeeee });
document.getElementById('canvas-container').appendChild(app.view);

const characterMap = {
  "spineboy": "https://raw.githubusercontent.com/EsotericSoftware/spine-runtimes/4.1/spine-ts/example/assets/spineboy-pro.json",
  "spine-girl": "https://raw.githubusercontent.com/EsotericSoftware/spine-runtimes/4.1/spine-ts/example/assets/spineboy-pro.json"
};

let currentCharacter;

function loadCharacter(name, animation="walk") {
    if(currentCharacter) app.stage.removeChild(currentCharacter);

    PIXI.Loader.shared.reset();
    PIXI.Loader.shared.add('character', characterMap[name]).load((loader, resources) => {
        const hero = new PIXI.spine.Spine(resources.character.spineData);
        hero.x = app.screen.width / 2;
        hero.y = app.screen.height - 50;
        hero.scale.set(0.5);
        app.stage.addChild(hero);
        currentCharacter = hero;

        hero.state.setAnimation(0, animation, true);
    });
}

loadCharacter("spineboy");

document.getElementById('characterSelect').addEventListener('change', e => {
    loadCharacter(e.target.value);
});

document.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', e => {
        if(currentCharacter) {
            const action = e.target.dataset.action;
            currentCharacter.state.setAnimation(0, action, false);
            currentCharacter.state.addAnimation(0, "walk", true, 0);
        }
    });
});
