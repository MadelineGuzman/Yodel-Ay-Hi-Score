(function () {
  const state = {
    initialized: false,
    activePointers: new Map(),
    overlay: null,
    left: false,
    right: false,
  };

  function pointerSide(clientX) {
    return clientX < window.innerWidth / 2 ? "left" : "right";
  }

  function isTouchLikePointer(event) {
    return event.pointerType !== "mouse" || window.matchMedia("(hover: none), (pointer: coarse)").matches;
  }

  function refreshDirections() {
    state.left = false;
    state.right = false;
    for (const side of state.activePointers.values()) {
      if (side === "left") state.left = true;
      if (side === "right") state.right = true;
    }
  }

  function ensureOverlay() {
    if (state.overlay) return;

    const overlay = document.createElement("div");
    overlay.id = "yodel-mobile-controls";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = '<div class="yodel-mobile-arrow yodel-mobile-arrow-left">&#9664;</div><div class="yodel-mobile-arrow yodel-mobile-arrow-right">&#9654;</div>';
    document.body.appendChild(overlay);

    const style = document.createElement("style");
    style.id = "yodel-mobile-controls-style";
    style.textContent = `
      #yodel-mobile-controls {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 2147483647;
        opacity: 0;
        transition: opacity 160ms ease;
      }

      #yodel-mobile-controls.yodel-mobile-controls-visible {
        opacity: 1;
      }

      .yodel-mobile-arrow {
        position: fixed;
        bottom: max(22px, env(safe-area-inset-bottom));
        width: 86px;
        height: 86px;
        border: 2px solid rgba(255, 255, 255, 0.42);
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.16);
        color: rgba(255, 255, 255, 0.52);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        font-size: 42px;
        line-height: 1;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.55);
        user-select: none;
      }

      .yodel-mobile-arrow-left {
        left: max(22px, env(safe-area-inset-left));
      }

      .yodel-mobile-arrow-right {
        right: max(22px, env(safe-area-inset-right));
      }

      @media (hover: hover) and (pointer: fine) {
        #yodel-mobile-controls {
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    state.overlay = overlay;
  }

  function init() {
    if (state.initialized) return;
    state.initialized = true;
    ensureOverlay();

    window.addEventListener("pointerdown", (event) => {
      if (!isTouchLikePointer(event)) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      state.activePointers.set(event.pointerId, pointerSide(event.clientX));
      refreshDirections();
    }, { passive: true });

    window.addEventListener("pointermove", (event) => {
      if (!state.activePointers.has(event.pointerId)) return;
      state.activePointers.set(event.pointerId, pointerSide(event.clientX));
      refreshDirections();
    }, { passive: true });

    function clearPointer(event) {
      state.activePointers.delete(event.pointerId);
      refreshDirections();
    }

    window.addEventListener("pointerup", clearPointer, { passive: true });
    window.addEventListener("pointercancel", clearPointer, { passive: true });
    window.addEventListener("blur", () => {
      state.activePointers.clear();
      refreshDirections();
    });
  }

  function setVisible(visible) {
    ensureOverlay();
    state.overlay.classList.toggle("yodel-mobile-controls-visible", !!visible);
  }

  window.YodelMobileControls = {
    update(runtimeScene) {
      init();
      setVisible(true);
      const players = runtimeScene.getObjects("Player");
      for (const player of players) {
        const behavior = player.getBehavior("PlatformerObject");
        if (!behavior) continue;
        if (state.left) behavior.simulateControl("Left");
        if (state.right) behavior.simulateControl("Right");
      }
    },
    hide() {
      if (state.overlay) setVisible(false);
      state.activePointers.clear();
      refreshDirections();
    },
  };
})();
