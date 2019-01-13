import React, { Component } from 'react'
/**
 * 取单弹窗
 */
import RootSiblings from 'react-native-root-siblings'
import CreateCommodityBoxContainer from './CreateCommodityBoxContainer'
import BaseBoxView from '../BaseBoxView'

export default class CreateCommodityBox {

    static show({ title }) {
        if ( this._manager != null ){
            this.hide()
        }
        this._manager = new RootSiblings(
            <BaseBoxView
                renderComponent={
                    <CreateCommodityBoxContainer
                        title={title}
                        destroy={() => {
                            this.hide()
                        }}
                    />
                }
                destroy={() => {
                    this.hide()
                }}
            />
        )
        return this._manager
    }

    static hide() {
        if ( this._manager !== undefined && this._manager instanceof RootSiblings ){
            this._manager.destroy()
            this._manager = null
        }
    }
}
