/* global Promise: true */ // require
import axios from 'axios'
import * as mockAPI from '../../../services/mockAPI'

// const qs = require( 'qs' )

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const apiFaultList = ( obj ) => {
    return new Promise( function( resolve, reject ) {
        axios.get(
            mockAPI.FAULT + '?clientNum=' + obj.userId
        )
        .then( response => {
            let resulData = response.data
            resolve( resulData )
        })
        .catch( error => {
            reject( error )
        })
    })
}
// 进度条接口
export const apiFaultDetail = ( obj ) => {
    return new Promise( function( resolve, reject ) {
        axios.get(
            // http://192.168.5.250:18081/repair/getDetails?id=2
            // mockAPI.FAULT_DETAIL + '?id=' + obj.detailId
            mockAPI.FAULT_DETAIL + '?id=' + obj.detailId
        )
        .then( response => {
            let resulData = response.data.data
            resolve( resulData )
        })
        .catch( error => {
            reject( error )
        })
    })
}
// 我的报修列表接口
export const apirepairState = ( obj ) => {
    return new Promise( function( resolve, reject ) {
        axios.get(
            // http://192.168.5.250:18081/repair/getDetails?id=2
            // mockAPI.FAULT_DETAIL + '?id=' + obj.detailId
            mockAPI.FAULT + '?clientNum=' + obj.clientNum
        )
            .then( response => {
                let resulData = response.data.data
                resolve( resulData )
            })
            .catch( error => {
                reject( error )
            })
    })
}
