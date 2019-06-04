import SpNavigationUI from "./modules/SpNavigationUI";
import AccordionUI from "./modules/AccordionUI";
import PageScrollUI from "./modules/PageScrollUI";
import ModalUI from "./modules/ModalUI";

new AccordionUI();
new ModalUI();
const pageScrollUI = new PageScrollUI();
const spNavigationUI = new SpNavigationUI();

pageScrollUI.on("scroll", () => {
    spNavigationUI.closeNavigation();
});
