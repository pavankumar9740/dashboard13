import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import jwt_decode from 'jwt-decode';
Vue.use(Vuex)
const _apiBaseURLforReelSizes=process.env.VUE_APP_ProdMgmtApisBaseUrl+"/Reelsize/";
const _apiBaseURLforSKUs=process.env.VUE_APP_ProdMgmtApisBaseUrl+"/SKU/";
const _apiBaseURLforProducts=process.env.VUE_APP_ProdMgmtApisBaseUrl+"/Product/";
export default new Vuex.Store({
    state: {
        reelSizesDto: [],
        sKUsDto: [],
        productsDto: [],
        orgins:[],
        categories:[],
        clientAppToken:null,
        clientAppDecodedToken:null
    },
    mutations: {
        updateSession(state, token){
            Vue.set(state, 'clientAppToken', token);
            Vue.set(state, 'clientAppDecodedToken', jwt_decode(token));
        },
        AddUpdateReelSizeDto(state, arrReelSize) {
            let reelSizeDto = state.reelSizesDto.find(reel => reel.id === arrReelSize.id);
            if(reelSizeDto==null) Vue.set(state.reelSizesDto,state.reelSizesDto.length,arrReelSize);
            else{
                state.reelSizesDto.splice(state.reelSizesDto.indexOf(reelSizeDto),1);
                state.reelSizesDto.push(arrReelSize);
                state.reelSizesDto=state.reelSizesDto.slice().sort(function(a,b){return a.id-b.id});
                }
        },
        AddUpdateSKUDto(state, arrSKU) {
            let sKUDto = state.sKUsDto.find(sku => sku.id === arrSKU.id);
            if(sKUDto==null) Vue.set(state.sKUsDto,state.sKUsDto.length,arrSKU);
            else{
                state.sKUsDto.splice(state.sKUsDto.indexOf(sKUDto),1);
                state.sKUsDto.push(arrSKU);
                state.sKUsDto=state.sKUsDto.slice().sort(function(a,b){return a.id-b.id});
                }
        },
        AddUpdateProductDto(state, arrProduct) {
            let productDto = state.productsDto.find(prod => prod.id === arrProduct.id);
            if(productDto==null) Vue.set(state.productsDto,state.productsDto.length,arrProduct);
            else{
                state.productsDto.splice(state.productsDto.indexOf(productDto),1);
                Vue.set(state.productsDto,state.productsDto.length,arrProduct);
                state.productsDto=state.productsDto.slice().sort(function(a,b){return a.id-b.id});
                }
        },
        AddOrigins(state, arrOrgins) {
            state.orgins=[];
            arrOrgins.forEach(element => {state.orgins.push(element);});
        },
        AddCategores(state, arrCategories) {
            state.categories=[];
            arrCategories.forEach(element => {state.categories.push(element);});
        }
    },
    actions: {
        AddUpdateReelSizeDtoAsync: async ({ commit }, arrReelSize) => {
            let jsonString=(arrReelSize.map(function(e){return JSON.stringify(e)})).join(',');
            await axios.post(_apiBaseURLforReelSizes,jsonString,).
            then(resp => {commit('AddUpdateReelSizeDto', resp.data)});
        },
        DeactivateReelSizeDtoAsync: async ({ commit }, arrReelSize) => {
            await axios.post(_apiBaseURLforReelSizes+'PostActiveStatus?id=' + arrReelSize[0] + '&activeStatus=' + arrReelSize[1] + '',).
            then(resp => {commit('AddUpdateReelSizeDto', resp.data)});
        },
        AddUpdateSKUDtoAsync: async ({ commit }, arrSKU) => {
            let jsonString=(arrSKU.map(function(e){return JSON.stringify(e)})).join(',');
            await axios.post(_apiBaseURLforSKUs,jsonString,).
            then(resp => {commit('AddUpdateSKUDto', resp.data)});
        },
        DeactivateSKUDtoAsync: async ({ commit }, arrSKU) => {
            await axios.post(_apiBaseURLforSKUs+'PostActiveStatus?id=' + arrSKU[0] + '&activeStatus=' + arrSKU[1] + '',).
            then(resp => {commit('AddUpdateSKUDto', resp.data)});
        },
        AddUpdateProductDtoAsync: async ({ commit }, arrProduct) => {
            await axios.post(_apiBaseURLforProducts,arrProduct[0],).
            then(resp => {commit('AddUpdateProductDto', resp.data)});
        },
        getAllReelSizesDtoAsync: async ({ commit }) => {  
            await axios.get(_apiBaseURLforReelSizes).
            then(resp => {resp.data.forEach(data => { commit('AddUpdateReelSizeDto', data)})});
        },
        getAllSKUsDtoAsync: async ({ commit }) => {  
            await axios.get(_apiBaseURLforSKUs).
            then(resp => {resp.data.forEach(data => { commit('AddUpdateSKUDto', data)})});
        },
        getAllProductsDtoAsync: async ({ commit }) => {  
            await axios.get(_apiBaseURLforProducts).
            then(resp => {resp.data.forEach(data => { commit('AddUpdateProductDto', data)})});
        },
        getAllOrginsAsync: async ({ commit }) => {  
            await axios.get(_apiBaseURLforProducts+'GetOrigins').
            then(resp => {commit('AddOrigins', resp.data)});
        },
        getAllCategoriesAsync: async ({ commit }) => {  
            await axios.get(_apiBaseURLforProducts+'GetCategories').
            then(resp => {commit('AddCategores', resp.data)});
        }
    },
    getters: {
        reelSizesDto:state=>state.reelSizesDto,
        sKUsDto:state=>state.sKUsDto,
        productsDto:state=>state.productsDto,
        activeReelSizesDto:state=>{return state.reelSizesDto.filter(element=>element.isActive===true)},
        activeSKUsDto:state=>{return state.sKUsDto.filter(element=>element.isActive===true)}
    }
})