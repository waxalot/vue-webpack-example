import { ViewModel } from '../common/viewModels/viewModel';
import { INavigationViewModel } from './interfaces/iNavigationViewModel';
import { Navigation } from './navigation';

export class NavigationViewModel extends ViewModel<Navigation> implements INavigationViewModel {

    get linkName1(): string {
        return this.model.linkName1;
    }
    set linkName1(value: string) {
        this.model.linkName1 = value;
    }

    /**
     * Creates an instance of NavigationViewModel.
     * @param {Navigation} model 
     * @param {string} viewSelector 
     * @memberof NavigationViewModel
     */
    public constructor(model: Navigation, viewSelector: string) {
        super(model, viewSelector);
    }

}