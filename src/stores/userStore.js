import { defineStore } from "pinia"
export const useUserStore = defineStore('userStore',{
    state: () => ({
        userData: "Sataroto@Test.com"
    }
    ),
    getters:{
        userMinuscula(state) {
            return state.userData.toLocaleLowerCase();
        }
    },
    actions:{
        registerUser(name){
            this.userData = name + "@Test.com"
        }
    }

})