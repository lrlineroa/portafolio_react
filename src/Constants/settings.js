// Settings.
const settings = {

    // Keyboard shortcuts.
    keyboardShortcuts: {

        // If true, enables scrolling via keyboard shortcuts.
        enabled: true,

        // Sets the distance to scroll when using the left/right arrow keys.
        distance: 50

    },

    // Scroll wheel.
    scrollWheel: {

        // If true, enables scrolling via the scroll wheel.
        enabled: true,

        // Sets the scroll wheel factor. (Ideally) a value between 0 and 1 (lower = slower scroll, higher = faster scroll).
        factor: 1

    },

    // Scroll zones.
    scrollZones: {

        // If true, enables scrolling via scroll zones on the left/right edges of the scren.
        enabled: true,

        // Sets the speed at which the page scrolls when a scroll zone is active (higher = faster scroll, lower = slower scroll).
        speed: 15

    },

    // Dragging.
    dragging: {

        // If true, enables scrolling by dragging the main wrapper with the mouse.
        enabled: true,

        // Sets the momentum factor. Must be a value between 0 and 1 (lower = less momentum, higher = more momentum, 0 = disable momentum scrolling).
        momentum: 0.875,

        // Sets the drag threshold (in pixels).
        threshold: 10

    },

    // If set to a valid selector , prevents key/mouse events from bubbling from these elements.
    excludeSelector: 'input:focus, select:focus, textarea:focus, audio, video, iframe',

    // Link scroll speed.
    linkScrollSpeed: 1000

};

export default settings;