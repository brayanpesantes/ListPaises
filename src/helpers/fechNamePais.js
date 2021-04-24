import { paisesApi } from "../api/PaisesApi"

export const fechNamePais = async(name) => {
 const resp =  await  paisesApi.get(`/alpha/${name}`)
 const paises = resp.data;
 return paises
}