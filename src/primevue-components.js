import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Toast from "primevue/toast";
import Card from "primevue/card";

export default (app) => {
  app.component("Button", Button);
  app.component("InputText", InputText);
  app.component("Menubar", Menubar);
  app.component("Dialog", Dialog);
  app.component("Dropdown", Dropdown);
  app.component("Toast", Toast);
  app.component("Card", Card);
};
