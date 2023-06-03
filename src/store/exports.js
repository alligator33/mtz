const loadedScripts = {};

export function loadScriptAsync(src) {

  return new Promise((resolve, reject) => {
    // Stop from loading twice.
    if (loadedScripts.hasOwnProperty(src)) return resolve(true);

    // Create script element and set attributes
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = src;

    console.log("Loading script: " + src);

   

    // Catch any errors while loading the script
    script.addEventListener("error", () => {
      reject(new Error(`${src} failed to load.`));
    });
  });
  }
  