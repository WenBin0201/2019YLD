import React, { Component } from 'react'
/**
 * 新增商品
 */
import RootSiblings from 'react-native-root-siblings'
import BaseBoxView from '../BaseBoxView'
import AddCommContainer from './AddCommContainer'

export default class AddCommBox {

    static show() {
        if (this._manager != null) {
            this.hide();
        }
        this._manager = new RootSiblings(
            <BaseBoxView
                renderComponent={
                    <AddCommContainer
                        destroy={() => {
                            this.hide();
                        }}
                    />
                }
                destroy={() => {
                    this.hide();
                }}
            />
        )
        return this._manager;
    }

    static hide() {
        if (this._manager !== undefined && this._manager instanceof RootSiblings) {
            this._manager.destroy();
            this._manager = null;
        }
    }
}