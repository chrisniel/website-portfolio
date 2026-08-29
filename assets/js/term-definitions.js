const termDefinitions = Object.freeze({
  unity: {
    label: "Unity",
    description: "A game engine used to build interactive 2D and 3D applications, including BantayGabi and Kumpuni."
  },
  blender: {
    label: "Blender",
    description: "A free 3D creation application used for modeling, animation, rendering, and preparing game assets."
  },
  godot: {
    label: "Godot",
    description: "A free, open-source game engine for creating 2D and 3D games and interactive applications."
  },
  shaderlab: {
    label: "ShaderLab",
    description: "Unity's language and structure for defining how materials are rendered by the graphics hardware."
  },
  "shader-graph": {
    label: "Shader Graph",
    description: "Unity's visual node-based tool for building material and rendering effects without writing every shader line manually."
  },
  "technical-art": {
    label: "Technical Art",
    description: "Work that connects visual art and programming, such as shaders, asset optimization, rendering, and engine integration."
  },
  glb: {
    label: "GLB",
    description: "A compact file that packages a 3D model, materials, and textures for sharing or displaying on the web."
  },
  lod: {
    label: "LOD",
    description: "Level of Detail: different versions of a 3D model used at different distances to improve performance."
  },
  "texture-array": {
    label: "Texture Array",
    description: "A collection of same-sized textures stored together so a shader can efficiently choose which layer to display."
  },
  forge: {
    label: "Forge",
    description: "A Minecraft mod loader and development platform used to run compatible collections of game modifications."
  },
  neoforge: {
    label: "NeoForge",
    description: "A community-developed Minecraft modding platform used to load and manage compatible mods."
  },
  papermc: {
    label: "PaperMC",
    description: "A performance-focused Minecraft server platform that supports server-side plugins and detailed configuration."
  },
  "discord-integration": {
    label: "Discord Integration",
    description: "A connection that can relay selected messages or events between a Minecraft server and a Discord server."
  },
  "java-heap": {
    label: "Java Heap",
    description: "The portion of computer memory reserved for a running Java application, such as a Minecraft server."
  },
  "view-distance": {
    label: "View Distance",
    description: "The distance around each player where the Minecraft server sends visible world chunks."
  },
  "simulation-distance": {
    label: "Simulation Distance",
    description: "The distance around players where the server actively updates entities, crops, machines, and other game systems."
  },
  git: {
    label: "Git",
    description: "A version-control system that records file changes and supports safe collaboration and recovery."
  },
  github: {
    label: "GitHub",
    description: "An online service for hosting Git repositories, reviewing changes, collaborating, and publishing project documentation."
  },
  "git-lfs": {
    label: "Git LFS",
    description: "Git Large File Storage keeps large binary assets outside normal Git history while tracking lightweight references."
  },
  autocad: {
    label: "AutoCAD",
    description: "Computer-aided design software used to create accurate technical drawings and plans."
  }
});

const termTriggers = document.querySelectorAll("[data-term]");

if (termTriggers.length > 0) {
  const popover = document.createElement("div");
  const popoverTitle = document.createElement("strong");
  const popoverDescription = document.createElement("p");
  let activeTrigger = null;

  popover.id = "technical-term-explanation";
  popover.className = "term-popover";
  popover.setAttribute("role", "tooltip");
  popover.hidden = true;
  popover.append(popoverTitle, popoverDescription);
  document.body.append(popover);

  function closeTermExplanation({ restoreFocus = false } = {}) {
    if (!activeTrigger) return;

    const previousTrigger = activeTrigger;
    previousTrigger.setAttribute("aria-expanded", "false");
    previousTrigger.removeAttribute("aria-describedby");
    activeTrigger = null;
    popover.hidden = true;

    if (restoreFocus) previousTrigger.focus();
  }

  function positionTermExplanation(trigger) {
    const viewportGap = 12;
    const triggerBox = trigger.getBoundingClientRect();
    const popoverBox = popover.getBoundingClientRect();
    let left = triggerBox.left;
    let top = triggerBox.bottom + 8;

    left = Math.min(left, window.innerWidth - popoverBox.width - viewportGap);
    left = Math.max(viewportGap, left);

    if (top + popoverBox.height > window.innerHeight - viewportGap) {
      top = triggerBox.top - popoverBox.height - 8;
    }

    popover.style.left = `${left}px`;
    popover.style.top = `${Math.max(viewportGap, top)}px`;
  }

  function openTermExplanation(trigger) {
    const definition = termDefinitions[trigger.dataset.term];
    if (!definition) return;

    if (activeTrigger === trigger) {
      closeTermExplanation();
      return;
    }

    closeTermExplanation();
    activeTrigger = trigger;
    popoverTitle.textContent = definition.label;
    popoverDescription.textContent = definition.description;
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-describedby", popover.id);
    popover.hidden = false;
    positionTermExplanation(trigger);
  }

  termTriggers.forEach((trigger) => {
    const definition = termDefinitions[trigger.dataset.term];

    if (!definition) return;
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", `${definition.label}: select for a short explanation`);
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      openTermExplanation(trigger);
    });
  });

  document.addEventListener("click", () => closeTermExplanation());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeTrigger) {
      closeTermExplanation({ restoreFocus: true });
    }
  });
  window.addEventListener("resize", () => closeTermExplanation());
  window.addEventListener("scroll", () => closeTermExplanation(), { passive: true });
}
