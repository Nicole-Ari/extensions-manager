import devLensLogo from "../assets/images/logo-devlens.svg";
import styleSpyLogo from "../assets/images/logo-style-spy.svg";
import speedBootLogo from "../assets/images/logo-speed-boost.svg";
import wizardJsonLogo from "../assets/images/logo-json-wizard.svg";
import tabMasterLogo from "../assets/images/logo-tab-master-pro.svg";
import viewportBuddyLogo from "../assets/images/logo-viewport-buddy.svg";
import markupNotesLogo from "../assets/images/logo-markup-notes.svg";
import gridGuidesLogo from "../assets/images/logo-grid-guides.svg";
import palettePickerLogo from "../assets/images/logo-palette-picker.svg";
import linkCheckerLogo from "../assets/images/logo-link-checker.svg";
import domSnapshotLogo from "../assets/images/logo-dom-snapshot.svg";
import codePlusLogo from "../assets/images/logo-console-plus.svg";

const extensions = [
  {
    icon: devLensLogo,
    alt: "DevLens logo",
    name: "DevLens",
    details: "Quickly inspect page layots and visualize element boundaries.",
    active: true,
  },
  {
    icon: styleSpyLogo,
    alt: "StyleSpy logo",
    name: "StyleSpy",
    details: "Instantly analyse and copy CSS from any webpage element.",
    active: true,
  },
  {
    icon: speedBootLogo,
    alt: "SpeedBoost logo",
    name: "SpeedBoost",
    details: "Optimizes browser resource usage to accelerate page loading.",
    active: false,
  },
  {
    icon: wizardJsonLogo,
    alt: "JsonWizard logo",
    name: "JsonWizard",
    details: "Formats, validates, and prettifies JSON responses in-browser.",
    active: true,
  },
  {
    icon: tabMasterLogo,
    alt: "TabMaster Pro logo",
    name: "TabMaster Pro",
    details: "Organizes browser tabs into groupes and sessions.",
    active: true,
  },
  {
    icon: viewportBuddyLogo,
    alt: " ViewportBuddy logo",
    name: "ViewportBuddy",
    details:
      "Simulates various screen resolutions directly within the browser.",
    active: false,
  },
  {
    icon: markupNotesLogo,
    alt: "Markup Notes logo",
    name: "Markup Notes",
    details:
      "Enables annotation and notes directly onto webpages for collaborative debbuging.",
    active: true,
  },
  {
    icon: gridGuidesLogo,
    alt: "GridGuides logo",
    name: "GridGuides",
    details: "Overlay customizable grids and alignment guides on any webpage.",
    active: false,
  },
  {
    icon: palettePickerLogo,
    alt: "Palette Picker logo",
    name: "Palette Picker",
    details: "Instantly extracts color palettes from any webpages.",
    active: true,
  },
  {
    icon: linkCheckerLogo,
    alt: "LinkChecker logo",
    name: "LinkChecker",
    details: "Scans and highlights broken links on any page.",
    active: true,
  },
  {
    icon: domSnapshotLogo,
    alt: "DOM snapshot logo",
    name: "DOM snapshot",
    details: "Capture and export DOM structures quickly.",
    active: false,
  },
  {
    icon: codePlusLogo,
    alt: "ConsolePlus logo",
    name: "ConsolePlus",
    details: "Enhanced developer console with advanced filtering and logging.",
    active: true,
  },
];
export default extensions;
