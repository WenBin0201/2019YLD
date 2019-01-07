import React, { Component } from 'react'

import RootSiblings from 'react-native-root-siblings'
import DialogBoxContainer from './DialogBoxContainer'
import BaseBoxView from '../BaseBoxView'
/**
 * 消息框，并提供按钮与用户进行交互
 */

/**
 * title
 * message
 * buttons：2个按钮比较合适
 * mixedView:自定义中间内容
 */
export default class DialogBox {

    static show(title, content,  options={buttons: [{text:'知道了',onPress:()=>{this.hide()}}],}, mixedView) {
        if (this._manager != null) {
            this.hide();
        }
        this._manager = new RootSiblings(
            <BaseBoxView
                renderComponent={
                    <DialogBoxContainer
                        title={title}
                        content={content}
                        {...options}
                        destroy={()=>{this.hide();}}
                        mixedView={mixedView}
                    />}
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