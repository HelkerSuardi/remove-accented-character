'use strict'

const removeAccentedCharacters = (value) => {
  return value
      .replace(new RegExp(/\s/g),"")
      .replace(new RegExp(/[àáâãäå]/g),"a")
      .replace(new RegExp(/[ÀÁÂÃÄÅ]/g),"A")
      .replace(new RegExp(/ç/g),"c")
      .replace(new RegExp(/Ç/g),"C")
      .replace(new RegExp(/[èéêë]/g),"e")
      .replace(new RegExp(/[ÈÉÊË]/g),"E")
      .replace(new RegExp(/[ìíîï]/g),"i")
      .replace(new RegExp(/[ÌÍÎÏ]/g),"I")
      .replace(new RegExp(/ñ/g),"n")
      .replace(new RegExp(/Ñ/g),"N")
      .replace(new RegExp(/[òóôõö]/g),"o")
      .replace(new RegExp(/[ÒÓÔÕÖ]/g),"O")
      .replace(new RegExp(/[ùúûü]/g),"u")
      .replace(new RegExp(/[ÙÚÛÜ]/g),"U")
      .replace(new RegExp(/[ýÿ]/g),"y")
      .replace(new RegExp(/[ÝŸ]/g),"Y")
      .replace(new RegExp(/\W/g),"");
}

module.exports = removeAccentedCharacters
