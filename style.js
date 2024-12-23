const tiles = document.querySelector('.tiles');
        const tileWidth = tiles.children[0].offsetWidth + 20; // Including margin
        const totalWidth = tileWidth * tiles.children.length;

        tiles.style.width = `${totalWidth}px`;

        tiles.addEventListener('animationiteration', () => {
            tiles.appendChild(tiles.children[0]);
            tiles.style.animation = 'none';
            tiles.offsetHeight; // Trigger reflow
            tiles.style.animation = null;
        });