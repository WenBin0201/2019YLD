import React, { Component } from 'react'
/**
 * 取单
 */
import RootSiblings from 'react-native-root-siblings'
import TakeBillBoxCopntainer from './TakeBillBoxContainer'

 export default class TakeBillBox {

    static show(){
        this._manager = new RootSiblings(
            <TakeBillBoxCopntainer />
        )
        return this._manager;
    }

    static hide(){
        if(this._manager !== undefined && this._manager instanceof RootSiblings){
            this._manager.destroy();
        }
    }
 }