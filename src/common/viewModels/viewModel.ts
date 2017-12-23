import Vue from 'vue';

import { IViewModel } from "./interfaces/iViewModel";

export abstract class ViewModel<T> implements IViewModel<T> {

    /**
     * The reference to the underlying model.
     * 
     * @protected
     * @type {T}
     * @memberof ViewModel
     */
    protected model: T;


    /**
     * The vue instance.
     * 
     * @private
     * @type {Vue}
     * @memberof ViewModel
     */
    private vue: any;


    /**
     * Creates an instance of ViewModel.
     * @param {T} model 
     * @param {string} viewSelector 
     * @memberof ViewModel
     */
    public constructor(model: T, viewSelector: string) {

        this.model = model;

        this.vue = new Vue(
            {
                data: model,
                el: viewSelector
            }
        );
        this.vue.$mount(viewSelector);
    }

}