import React, { Component } from 'react'
/**
 * 商品选择弹窗
 */
import RootSiblings from 'react-native-root-siblings'
import BaseBoxView from '../BaseBoxView'
import ComSelectBoxContainer from './ComSelectBoxContainer'

export default class ComSelectBox {

    static show(options) {
        if (this._manager != null) {
            this.hide();
        }
        this._manager = new RootSiblings(
            <BaseBoxView
                renderComponent={
                    <ComSelectBoxContainer
                        {...options}
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