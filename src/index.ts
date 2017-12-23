import { Navigation } from "./navigation/navigation";
import { NavigationViewModel } from "./navigation/navigationViewModel";
import { INavigationViewModel } from "./navigation/interfaces/iNavigationViewModel";


const navigation = new Navigation();
navigation.linkName1 = "Link1";
navigation.linkName2 = "Link2";

const navigationVM: INavigationViewModel = new NavigationViewModel(navigation, '#app');