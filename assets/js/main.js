const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

function closeNavigation() {
  if (!menuButton || !navigation) return;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Open navigation";
  navigation.classList.remove("is-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.querySelector(".sr-only").textContent = isOpen
      ? "Open navigation"
      : "Close navigation";
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      closeNavigation();
      menuButton.focus();
    }
  });
}

function readSavedTheme() {
  try {
    return localStorage.getItem("portfolio-theme");
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // The selected theme still works for this page view when storage is unavailable.
  }
}

function preferredTheme() {
  const savedTheme = readSavedTheme();
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  if (themeButton && themeIcon) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeButton.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  }
}

applyTheme(preferredTheme());

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

const sidebarFeature = document.querySelector("[data-sidebar-feature]");
const sidebarDesktopQuery = window.matchMedia(
  "(min-width: 68.0625rem) and (min-height: 45.0625rem)"
);

function loadSidebarArtwork() {
  if (
    !sidebarFeature ||
    !sidebarDesktopQuery.matches ||
    sidebarFeature.dataset.sidebarImageReady === "true"
  ) return;

  const artwork = sidebarFeature.querySelector("[data-sidebar-art]");
  const images = (sidebarFeature.dataset.sidebarImages || "")
    .split(",")
    .map((imagePath) => imagePath.trim())
    .filter(Boolean);

  if (!artwork || images.length === 0) return;

  const selectedImage = images[Math.floor(Math.random() * images.length)];
  artwork.style.backgroundImage = `url("${selectedImage}")`;
  sidebarFeature.dataset.sidebarImageReady = "true";
}

loadSidebarArtwork();
sidebarDesktopQuery.addEventListener("change", loadSidebarArtwork);

const modelViewerScripts = new Map();

function loadModelViewerScript(source) {
  if (customElements.get("model-viewer")) return Promise.resolve();
  if (modelViewerScripts.has(source)) return modelViewerScripts.get(source);

  const scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = source;
    script.addEventListener("load", () => {
      customElements.whenDefined("model-viewer").then(resolve).catch(reject);
    });
    script.addEventListener("error", () => {
      modelViewerScripts.delete(source);
      reject(new Error("The 3D viewer script could not load."));
    });
    document.head.append(script);
  });

  modelViewerScripts.set(source, scriptPromise);
  return scriptPromise;
}

function setViewerVisibility(viewer, isVisible) {
  if (!viewer) return;

  viewer.classList.remove("is-viewer-loading");
  viewer.hidden = !isVisible;
  viewer.classList.toggle("is-viewer-hidden", !isVisible);
}

function setViewerLoading(viewer) {
  if (!viewer) return;

  viewer.hidden = false;
  viewer.classList.remove("is-viewer-hidden");
  viewer.classList.add("is-viewer-loading");
}

function hideViewerWithoutInterruptingLoad(viewer) {
  if (!viewer) return;

  if (viewer.classList.contains("is-viewer-loading")) {
    setViewerLoading(viewer);
    return;
  }

  setViewerVisibility(viewer, false);
}

document.querySelectorAll("[data-media-carousel]").forEach((carousel) => {
  const image = carousel.querySelector("[data-media-image]");
  const video = carousel.querySelector("[data-media-video]");
  const title = carousel.querySelector("[data-media-title]");
  const description = carousel.querySelector("[data-media-description]");
  const kind = carousel.querySelector("[data-media-kind]");
  const status = carousel.querySelector("[data-media-status]");
  const previousButton = carousel.querySelector("[data-media-previous]");
  const nextButton = carousel.querySelector("[data-media-next]");
  const items = Array.from(carousel.querySelectorAll("[data-media-item]"));

  if (
    !image ||
    !video ||
    !title ||
    !description ||
    !kind ||
    !status ||
    !previousButton ||
    !nextButton ||
    items.length === 0
  ) return;

  let activeIndex = Math.max(items.findIndex((item) => item.classList.contains("is-active")), 0);

  const selectMedia = (nextIndex, shouldScroll = true) => {
    activeIndex = (nextIndex + items.length) % items.length;
    const selectedItem = items[activeIndex];
    const mediaType = selectedItem.dataset.mediaType;

    video.pause();

    items.forEach((item, index) => {
      const isSelected = index === activeIndex;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    title.textContent = selectedItem.dataset.mediaTitle;
    description.textContent = selectedItem.dataset.mediaDescription;
    kind.textContent = selectedItem.dataset.mediaKind;

    if (mediaType === "video") {
      const nextSource = selectedItem.dataset.mediaSrc;

      image.hidden = true;
      video.hidden = false;
      video.poster = selectedItem.dataset.mediaPoster || "";

      if (video.dataset.loadedSource !== nextSource) {
        video.src = nextSource;
        video.dataset.loadedSource = nextSource;
        video.load();
      }
    } else {
      video.hidden = true;
      image.hidden = false;
      image.src = selectedItem.dataset.mediaSrc;
      image.alt = selectedItem.dataset.mediaAlt;
    }

    if (shouldScroll) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      selectedItem.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
    status.textContent = `Showing ${selectedItem.dataset.mediaTitle}, ${mediaType} ${activeIndex + 1} of ${items.length}.`;
  };

  items.forEach((item, index) => {
    item.addEventListener("click", () => selectMedia(index));
  });

  previousButton.addEventListener("click", () => selectMedia(activeIndex - 1));
  nextButton.addEventListener("click", () => selectMedia(activeIndex + 1));

  selectMedia(activeIndex, false);
});

document.querySelectorAll("[data-project-gallery]").forEach((gallery) => {
  const stage = gallery.querySelector("[data-gallery-stage]");
  const image = stage?.querySelector("[data-gallery-image]");
  const closeModelButton = stage?.querySelector("[data-close-model]");
  const choices = gallery.querySelectorAll("[data-gallery-mode]");

  if (!stage || !image || choices.length === 0) return;

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      choices.forEach((item) => {
        const isSelected = item === choice;
        item.classList.toggle("is-active", isSelected);
        item.setAttribute("aria-pressed", String(isSelected));
      });

      const mode = choice.dataset.galleryMode;
      const viewer = stage.querySelector("model-viewer");

      if (mode === "model") {
        stage.classList.remove("is-image-mode");
        image.src = choice.dataset.gallerySrc;
        image.alt = choice.dataset.galleryAlt;

        if (stage.dataset.modelReady === "true" && viewer) {
          image.hidden = true;
          setViewerVisibility(viewer, true);
          if (closeModelButton) closeModelButton.hidden = false;
          stage.classList.add("is-model-ready");
        } else {
          image.hidden = false;
          if (closeModelButton) closeModelButton.hidden = true;
          stage.classList.remove("is-model-ready");
        }
        return;
      }

      stage.classList.add("is-image-mode");
      stage.classList.remove("is-model-ready");
      image.hidden = false;
      image.src = choice.dataset.gallerySrc;
      image.alt = choice.dataset.galleryAlt;
      hideViewerWithoutInterruptingLoad(viewer);
      if (closeModelButton) closeModelButton.hidden = true;
    });
  });
});

document.querySelectorAll("[data-model-showcase]").forEach((stage) => {
  const loadButton = stage.querySelector("[data-load-model]");
  const status = stage.querySelector("[data-model-status]");
  const image = stage.querySelector("[data-gallery-image]");
  const closeModelButton = stage.querySelector("[data-close-model]");

  if (!loadButton || !status || !image || !closeModelButton) return;

  let modelLoadTimeoutId;

  const clearModelLoadTimeout = () => {
    if (!modelLoadTimeoutId) return;

    window.clearTimeout(modelLoadTimeoutId);
    modelLoadTimeoutId = undefined;
  };

  const restoreModelFallback = (viewer, message) => {
    clearModelLoadTimeout();

    if (viewer) {
      viewer.dataset.modelSource = "";
      viewer.remove();
    }

    stage.dataset.modelReady = "false";
    stage.classList.remove("is-model-ready", "is-image-mode");
    image.hidden = false;
    image.src = stage.dataset.modelPoster;
    image.alt = stage.dataset.modelAlt;
    loadButton.disabled = false;
    loadButton.textContent = "Try loading the 3D model again";
    closeModelButton.hidden = true;
    status.textContent = message;
  };

  closeModelButton.addEventListener("click", () => {
    const viewer = stage.querySelector("model-viewer");
    const modelChoice = stage
      .closest("[data-project-gallery]")
      ?.querySelector('[data-gallery-mode="model"]');

    setViewerVisibility(viewer, false);
    image.hidden = false;
    image.src = modelChoice?.dataset.gallerySrc || stage.dataset.modelPoster;
    image.alt = modelChoice?.dataset.galleryAlt || stage.dataset.modelAlt;
    stage.classList.remove("is-model-ready", "is-image-mode");
    closeModelButton.hidden = true;
    loadButton.disabled = false;
    loadButton.textContent = "Open interactive 3D model";
    status.textContent = "The model remains loaded in this tab and can be reopened instantly.";
  });

  loadButton.addEventListener("click", async () => {
    const existingViewer = stage.querySelector("model-viewer");
    const requestedSource = stage.dataset.modelSrc;

    if (
      stage.dataset.modelReady === "true" &&
      existingViewer?.dataset.modelSource === requestedSource &&
      existingViewer.dataset.modelLoaded === "true"
    ) {
      image.hidden = true;
      setViewerVisibility(existingViewer, true);
      stage.classList.add("is-model-ready");
      stage.classList.remove("is-image-mode");
      closeModelButton.hidden = false;
      return;
    }

    loadButton.disabled = true;
    status.textContent = "Preparing the 3D viewer…";

    try {
      await loadModelViewerScript(stage.dataset.modelScript);

      const viewer = existingViewer || document.createElement("model-viewer");

      if (!existingViewer) {
        viewer.className = "showcase-media";
        viewer.setAttribute("camera-controls", "");
        viewer.setAttribute("touch-action", "pan-y");
        viewer.setAttribute("interaction-prompt", "auto");
        viewer.setAttribute("shadow-intensity", "0.8");
        viewer.setAttribute("tone-mapping", "neutral");

        viewer.addEventListener("progress", (event) => {
          if (viewer.dataset.modelSource !== stage.dataset.modelSrc) return;

          const progress = Math.round(event.detail.totalProgress * 100);
          status.textContent = `Loading 3D model… ${progress}%`;
        });

        viewer.addEventListener("load", () => {
          clearModelLoadTimeout();
          viewer.dataset.modelLoaded = "true";
          const isCurrentModel = viewer.dataset.modelSource === stage.dataset.modelSrc;
          stage.dataset.modelReady = String(isCurrentModel);

          const activeChoice = stage
            .closest("[data-project-gallery]")
            ?.querySelector("[data-gallery-mode].is-active");

          if (isCurrentModel && activeChoice?.dataset.galleryMode === "model") {
            image.hidden = true;
            setViewerVisibility(viewer, true);
            closeModelButton.hidden = false;
            stage.classList.add("is-model-ready");
            status.textContent = "3D model ready. Drag to rotate and scroll or pinch to zoom.";
          } else {
            setViewerVisibility(viewer, false);
            closeModelButton.hidden = true;
          }
        });

        viewer.addEventListener("error", () => {
          if (viewer.dataset.modelSource !== stage.dataset.modelSrc) return;

          const message = window.location.protocol === "file:"
            ? "The model could not load from a file link. Preview the site with the local server instead."
            : "The model could not load. Please try again or use the poster image.";
          restoreModelFallback(viewer, message);
        });

        stage.append(viewer);
      }

      viewer.dataset.modelSource = requestedSource;
      viewer.dataset.modelLoaded = "false";
      viewer.setAttribute("poster", stage.dataset.modelPoster);
      viewer.setAttribute("alt", stage.dataset.modelAlt);
      setViewerLoading(viewer);
      image.hidden = false;
      closeModelButton.hidden = true;
      stage.classList.remove("is-model-ready", "is-image-mode");
      status.textContent = "Loading 3D model… 0%";

      clearModelLoadTimeout();
      modelLoadTimeoutId = window.setTimeout(() => {
        if (
          viewer.dataset.modelSource !== requestedSource ||
          viewer.dataset.modelLoaded === "true"
        ) return;

        restoreModelFallback(
          viewer,
          "The model took too long to finish loading. Check your connection and try again."
        );
      }, 45000);
      viewer.setAttribute("src", requestedSource);
    } catch {
      clearModelLoadTimeout();
      loadButton.disabled = false;
      status.textContent = "The 3D viewer could not load. Check your internet connection and try again.";
    }
  });
});

document.querySelectorAll("[data-model-library]").forEach((library) => {
  const selectors = Array.from(library.querySelectorAll("[data-model-select]"));
  const stage = library.querySelector("[data-model-showcase]");
  const gallery = library.querySelector("[data-project-gallery]");
  const modelChoice = gallery?.querySelector('[data-gallery-mode="model"]');
  const angleChoices = Array.from(gallery?.querySelectorAll("[data-model-angle-choice]") ?? []);
  const loadButton = stage?.querySelector("[data-load-model]");
  const status = stage?.querySelector("[data-model-status]");
  const stageImage = stage?.querySelector("[data-gallery-image]");
  const closeButton = stage?.querySelector("[data-close-model]");

  if (
    selectors.length === 0 ||
    !stage ||
    !modelChoice ||
    angleChoices.length === 0 ||
    !loadButton ||
    !status ||
    !stageImage ||
    !closeButton
  ) return;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const selectModel = (selectedModel) => {
    selectors.forEach((model) => {
      const isSelected = model === selectedModel;
      model.classList.toggle("is-active", isSelected);
      model.setAttribute("aria-pressed", String(isSelected));
    });

    const viewer = stage.querySelector("model-viewer");
    const viewerMatches =
      viewer?.dataset.modelSource === selectedModel.dataset.modelSrc &&
      viewer.dataset.modelLoaded === "true";

    stage.dataset.modelSrc = selectedModel.dataset.modelSrc;
    stage.dataset.modelPoster = selectedModel.dataset.modelPoster;
    stage.dataset.modelAlt = selectedModel.dataset.modelAlt;
    stage.dataset.modelReady = String(viewerMatches);
    stage.classList.remove("is-model-ready", "is-image-mode");
    hideViewerWithoutInterruptingLoad(viewer);
    closeButton.hidden = true;

    modelChoice.dataset.gallerySrc = selectedModel.dataset.modelPoster;
    modelChoice.dataset.galleryAlt = selectedModel.dataset.modelAlt;
    const modelChoiceImage = modelChoice.querySelector("img");
    if (modelChoiceImage) modelChoiceImage.src = selectedModel.dataset.modelPoster;

    angleChoices.forEach((angleChoice, index) => {
      const angleNumber = index + 1;
      const angleSource = selectedModel.getAttribute(`data-model-angle-${angleNumber}-src`);
      const angleAlt = selectedModel.getAttribute(`data-model-angle-${angleNumber}-alt`);
      const angleText = selectedModel.getAttribute(`data-model-angle-${angleNumber}-label`);

      angleChoice.hidden = !angleSource;
      angleChoice.dataset.gallerySrc = angleSource || "";
      angleChoice.dataset.galleryAlt = angleAlt || "";

      const angleImage = angleChoice.querySelector("[data-model-angle-image]");
      if (angleImage && angleSource) angleImage.src = angleSource;
      if (angleImage && !angleSource) angleImage.removeAttribute("src");

      const angleLabel = angleChoice.querySelector("[data-model-angle-label]");
      if (angleLabel) angleLabel.textContent = angleText || `Render ${angleNumber}`;
    });

    stageImage.hidden = false;
    stageImage.src = selectedModel.dataset.modelPoster;
    stageImage.alt = selectedModel.dataset.modelAlt;
    loadButton.disabled = false;
    loadButton.textContent = viewerMatches ? "Open loaded 3D model" : "Load interactive 3D model";
    status.textContent = viewerMatches
      ? "This model remains loaded in this tab and can be reopened instantly."
      : "The 3D file downloads only after you select this button.";

    setText("[data-model-viewer-title]", selectedModel.dataset.modelTitle);
    setText("[data-model-detail-title]", selectedModel.dataset.modelTitle);
    setText("[data-model-category-output]", selectedModel.dataset.modelCategory);
    setText("[data-model-detail-description]", selectedModel.dataset.modelDescription);
    setText("[data-model-triangles-output]", selectedModel.dataset.modelTriangles);
    setText("[data-model-vertices-output]", selectedModel.dataset.modelVertices);
    setText("[data-model-materials-output]", selectedModel.dataset.modelMaterials);
    setText("[data-model-size-output]", selectedModel.dataset.modelSize);

    const detailImage = document.querySelector("[data-model-detail-image]");
    if (detailImage) {
      detailImage.src = selectedModel.dataset.modelPoster;
      detailImage.alt = `${selectedModel.dataset.modelTitle} model poster`;
    }

    modelChoice.click();
  };

  selectors.forEach((selector) => {
    selector.addEventListener("click", () => selectModel(selector));
  });
});
