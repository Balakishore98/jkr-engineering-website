/* JKR Engineering website — Hero 3D scene (Three.js).
   A slowly-tumbling cluster of glossy machined-part shapes with a maroon rim
   glow and drifting particles, evoking the dark/glossy/glowing 3D-render look
   without a video-generation pipeline. Pauses under prefers-reduced-motion
   and when the tab isn't visible. */
(function () {
  function init(canvas) {
    const THREE = window.THREE;
    if (!THREE || !canvas) return null;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0.6, 0.5, 6.4);

    scene.add(new THREE.AmbientLight(0x556070, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(5, 6, 6);
    scene.add(key);
    const rimRed = new THREE.PointLight(0xe35550, 9, 22);
    rimRed.position.set(-4, -1.5, 3);
    scene.add(rimRed);
    const rimMaroon = new THREE.PointLight(0x7f0606, 7, 22);
    rimMaroon.position.set(4, 3, -3);
    scene.add(rimMaroon);

    const group = new THREE.Group();
    group.scale.setScalar(1.25);
    group.position.x = 1.3;
    scene.add(group);

    const steelMat = new THREE.MeshStandardMaterial({ color: 0x9aa6b3, metalness: 0.95, roughness: 0.22 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x2b3542, metalness: 0.85, roughness: 0.32 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x7f0606, metalness: 0.55, roughness: 0.3, emissive: 0x7f0606, emissiveIntensity: 0.55 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xb8862e, metalness: 0.85, roughness: 0.3 });

    const objects = [];
    function place(mesh, pos, rot) {
      mesh.position.set(pos[0], pos[1], pos[2]);
      if (rot) mesh.rotation.set(rot[0], rot[1], rot[2]);
      group.add(mesh);
      objects.push(mesh);
      return mesh;
    }

    // -- Milling cutter: shank + face-mill head ringed with carbide-insert teeth.
    function makeMillingCutter() {
      const g = new THREE.Group();
      const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.0, 24), steelMat);
      shank.position.y = 0.6;
      g.add(shank);
      const head = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.32, 32), darkMat);
      g.add(head);
      const teeth = 8;
      for (let i = 0; i < teeth; i++) {
        const a = (i / teeth) * Math.PI * 2;
        const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.34, 0.09), goldMat);
        tooth.position.set(Math.cos(a) * 0.47, 0, Math.sin(a) * 0.47);
        tooth.rotation.y = a;
        g.add(tooth);
      }
      return g;
    }

    // -- Drill bit: shank + conical tip + a helical flute traced with a thin tube.
    function makeDrillBit() {
      const g = new THREE.Group();
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.3, 20), steelMat);
      g.add(shaft);
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.34, 20), accentMat);
      tip.position.y = -0.82;
      g.add(tip);
      const helixPts = [];
      for (let i = 0; i <= 28; i++) {
        const t = i / 28;
        helixPts.push(new THREE.Vector3(Math.cos(t * Math.PI * 6) * 0.16, 0.62 - t * 1.3, Math.sin(t * Math.PI * 6) * 0.16));
      }
      const flute = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(helixPts), 80, 0.02, 6, false), darkMat);
      g.add(flute);
      return g;
    }

    // -- Tool holder: BT-style taper, retention flange, collet nose.
    function makeToolHolder() {
      const g = new THREE.Group();
      const taper = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.22, 0.95, 28), steelMat);
      g.add(taper);
      const flange = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.055, 16, 32), accentMat);
      flange.rotation.x = Math.PI / 2;
      flange.position.y = 0.18;
      g.add(flange);
      const collet = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 0.55, 20), darkMat);
      collet.position.y = -0.72;
      g.add(collet);
      return g;
    }

    // -- Boring bar: long slender shaft with a square carbide insert near the tip.
    function makeBoringBar() {
      const g = new THREE.Group();
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.9, 20), darkMat);
      g.add(shaft);
      const insert = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.07, 0.2), goldMat);
      insert.position.set(0.15, 0.78, 0.05);
      g.add(insert);
      return g;
    }

    // -- Indexable insert: triangular carbide plate.
    function makeInsert(mat) {
      return new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.07, 3), mat);
    }

    place(makeMillingCutter(), [-1.5, 0.3, 0], [0.3, 0, 0.5]);
    place(makeDrillBit(), [1.7, -0.5, 1], [0, 0, 0.35]);
    place(makeToolHolder(), [0.4, 1.2, -0.9], [0.5, 0.6, 0]);
    place(makeBoringBar(), [-2.0, -0.6, -0.6], [0, 0, 1.1]);
    place(makeInsert(accentMat), [2.0, 0.9, -0.3], [1.1, 0.4, 0]);
    place(makeInsert(goldMat), [0.1, -0.3, 1.6], [0.6, 1.2, 0]);

    const particleCount = 260;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xe35550, size: 0.04, transparent: true, opacity: 0.75,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    function resize() {
      const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);
    resize();

    let mouseX = 0, mouseY = 0;
    const onMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMove);

    let visible = true;
    const onVis = () => { visible = !document.hidden; };
    document.addEventListener('visibilitychange', onVis);

    let raf = null;
    function animate(t) {
      raf = requestAnimationFrame(animate);
      if (!visible) return;
      const time = t * 0.00012;
      group.rotation.y = time * 0.7;
      group.rotation.x = Math.sin(time * 0.6) * 0.18;
      objects.forEach((m, i) => {
        m.rotation.x += 0.0022 * ((i % 3) + 1);
        m.rotation.y += 0.0028 * ((i % 2) + 1);
      });
      points.rotation.y = time * 0.25;
      camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.02;
      camera.position.y += (0.5 - mouseY * 1.1 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(animate);
    }

    return function destroy() {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('visibilitychange', onVis);
      renderer.dispose();
    };
  }

  function whenThreeReady(cb) {
    if (window.THREE) { cb(); return; }
    window.addEventListener('three-ready', cb, { once: true });
  }

  window.JKRHero3D = { init: init, whenReady: whenThreeReady };
})();
