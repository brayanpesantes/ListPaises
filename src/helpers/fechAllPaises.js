import { paisesApi } from "../api/PaisesApi"

export const fechAllPaises = async() => {
 const resp =  await  paisesApi.get('/all')
 const pais = resp.data;
 return pais;
}