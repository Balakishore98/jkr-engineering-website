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

    const objects = [];
    function addMesh(geo, mat, pos) {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(pos[0], pos[1], pos[2]);
      m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      group.add(m);
      objects.push(m);
    }

    addMesh(new THREE.TorusGeometry(1.15, 0.17, 32, 100), steelMat, [-1.5, 0.4, 0]);
    addMesh(new THREE.TorusGeometry(0.6, 0.13, 32, 100), accentMat, [1.7, -0.6, 1]);
    addMesh(new THREE.IcosahedronGeometry(0.7, 0), darkMat, [0.5, 1.2, -0.9]);
    addMesh(new THREE.CylinderGeometry(0.22, 0.22, 1.7, 24), steelMat, [-0.5, -1.05, 0.7]);
    addMesh(new THREE.OctahedronGeometry(0.5, 0), accentMat, [2.1, 0.9, -0.4]);
    addMesh(new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16), darkMat, [-2.1, -0.35, -0.7]);
    addMesh(new THREE.DodecahedronGeometry(0.4, 0), steelMat, [0.2, -0.2, 1.6]);

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
